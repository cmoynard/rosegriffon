"use server";

import nodemailer from "nodemailer";
import { ContactFormValues } from "./schema";

// Interface pour les options d'email avec propriété attachments
interface NodemailerMailOptions {
  from: string;
  to: string;
  subject: string;
  html: string;
  attachments?: {
    filename: string;
    content: Buffer;
    contentType: string;
  }[];
}

// Configurer le transporteur SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER || "rosegriffonfr@gmail.com",
    pass: process.env.SMTP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false, // Accepter les certificats auto-signés
    ciphers: "SSLv3",
  },
});

export async function sendContactEmail(formData: ContactFormValues) {
  try {
    // Construire le contenu de l'email
    const emailContent = `
      <h2>Titre : ${formData.title}</h2>
      <p><strong>Sujet :</strong> ${formData.subject}</p>
      <p><strong>Description :</strong></p>
      <p>${formData.description}</p>
    `;

    // Préparer les options de l'email
    const mailOptions: NodemailerMailOptions = {
      from: process.env.SMTP_USER || "rosegriffonfr@gmail.com",
      to: "rosegriffonfr@gmail.com",
      subject: `[RG WEB] ${formData.subject} - ${formData.title}`,
      html: emailContent,
    };

    // Ajouter la pièce jointe si elle existe et a les propriétés attendues
    if (
      formData.file &&
      formData.file instanceof File &&
      typeof formData.file === "object" &&
      "arrayBuffer" in formData.file &&
      "name" in formData.file &&
      "type" in formData.file
    ) {
      try {
        const fileBuffer = await formData.file.arrayBuffer();
        mailOptions.attachments = [
          {
            filename: formData.file.name,
            content: Buffer.from(fileBuffer),
            contentType: formData.file.type,
          },
        ];
      } catch (error) {
        console.error("Erreur lors du traitement de la pièce jointe:", error);
        // Continuer sans pièce jointe si une erreur survient
      }
    }

    // Vérifier la connexion SMTP
    try {
      await new Promise((resolve, reject) => {
        transporter.verify(function (error, success) {
          if (error) {
            console.error("Erreur de vérification SMTP:", error);
            reject(error);
          } else {
            console.log("Serveur SMTP prêt à envoyer des messages");
            resolve(success);
          }
        });
      });
    } catch (error) {
      console.error("La vérification SMTP a échoué:", error);
      // Continuer malgré l'erreur de vérification
    }

    // Envoyer l'email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email envoyé:", info.messageId);

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return { success: false, error: (error as Error).message };
  }
}
