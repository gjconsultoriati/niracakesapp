import { z } from 'zod';

export type SignInFormData = z.infer<typeof SignInFormSchema>
export const SignInFormSchema = z.object({
  password: z
  .string()
  .min(6, { message: 'Sua senha possui ao menos 6 letras e/ou numeros.' }),
})