"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { contactFormSchema, type ContactFormValues } from "./schema";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      title: "",
      subject: undefined,
      description: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    try {
      setIsSubmitting(true);

      // Simuler un envoi de formulaire
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Formulaire soumis:", data);

      toast.success("Formulaire envoyé", {
        description:
          "Nous avons bien reçu votre message et reviendrons vers vous rapidement.",
      });

      form.reset();
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      toast.error("Erreur lors de l'envoi", {
        description:
          "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container py-10 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Contactez-nous</h1>
        <p className="text-muted-foreground">
          Vous avez une question, une suggestion ou souhaitez collaborer avec
          nous ? N'hésitez pas à nous contacter en remplissant le formulaire
          ci-dessous.
        </p>
      </div>

      <div className="border rounded-lg p-6 bg-card">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Titre du message*</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Entrez le titre de votre message"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Un titre concis qui résume votre demande.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sujet*</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez un sujet" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Information sur l'association">
                        Information sur l'association
                      </SelectItem>
                      <SelectItem value="Collaboration">
                        Collaboration
                      </SelectItem>
                      <SelectItem value="Don et soutien">
                        Don et soutien
                      </SelectItem>
                      <SelectItem value="Événements à venir">
                        Événements à venir
                      </SelectItem>
                      <SelectItem value="Adhésion">Adhésion</SelectItem>
                      <SelectItem value="Bénévolat">Bénévolat</SelectItem>
                      <SelectItem value="Demande de presse">
                        Demande de presse
                      </SelectItem>
                      <SelectItem value="Témoignage">Témoignage</SelectItem>
                      <SelectItem value="Support technique">
                        Support technique
                      </SelectItem>
                      <SelectItem value="Autres">
                        Autres (préciser dans le titre)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Choisissez le sujet qui correspond le mieux à votre demande.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description*</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Détaillez votre demande ici..."
                      className="min-h-[120px] resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Décrivez votre demande en détail pour que nous puissions
                    mieux vous aider.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="file"
              render={({ field: { value, onChange, ...fieldProps } }) => (
                <FormItem>
                  <FormLabel>Pièce jointe (optionnel)</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept=".pdf,.docx,.txt,.jpg,.jpeg,.png,.gif"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        onChange(file || null);
                      }}
                      {...fieldProps}
                    />
                  </FormControl>
                  <FormDescription>
                    Formats acceptés: PDF, DOCX, images (JPG, PNG, GIF) et TXT.
                    Taille maximale: 5MB.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
