import { z } from 'zod';

export type PostCakeValidationFormData = z.infer<typeof postCakeValidationSchema>;
export const postCakeValidationSchema = z.object({
  name: z.string().min(6, { message: 'Por favor, o nome do bolo deve ter pelo menos 6 caracteres.'}),
  description: z.string().min(6, { message: 'Por favor, forneça uma descrição do bolo com pelo menos 6 caracteres.'}),
});


