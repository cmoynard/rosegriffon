import { z } from "zod";

// Schéma pour le formulaire de contact
export const contactFormSchema = z.object({
  title: z.string().min(2, {
    message: "Le titre doit contenir au moins 2 caractères.",
  }),
  subject: z.enum(
    [
      "Information sur l'association",
      "Collaboration",
      "Don et soutien",
      "Événements à venir",
      "Adhésion",
      "Bénévolat",
      "Demande de presse",
      "Témoignage",
      "Support technique",
      "Autres",
    ],
    {
      required_error: "Veuillez sélectionner un sujet.",
    }
  ),
  description: z.string().min(10, {
    message: "La description doit contenir au moins 10 caractères.",
  }),
  file: z
    .instanceof(File)
    .refine(
      (file) => {
        if (!file || file.size === 0) return true;

        const acceptedTypes = [
          "application/pdf",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "image/jpeg",
          "image/png",
          "image/gif",
          "text/plain",
        ];

        return acceptedTypes.includes(file.type);
      },
      {
        message:
          "Format de fichier non valide. Formats acceptés: PDF, DOCX, images et TXT.",
      }
    )
    .refine(
      (file) => {
        if (!file || file.size === 0) return true;
        return file.size <= 5 * 1024 * 1024; // 5MB
      },
      {
        message: "Le fichier doit faire moins de 5MB.",
      }
    )
    .optional(),
});

// Type du formulaire de contact
export type ContactFormValues = z.infer<typeof contactFormSchema>;
