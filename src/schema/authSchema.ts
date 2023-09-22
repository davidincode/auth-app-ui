import { z } from 'zod'

export const signUpSchema = z
  .object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Password do not match',
    path: ['confirmPassword'],
  })

export type SignUpInput = z.infer<typeof signUpSchema>
export type SignUpData = Pick<SignUpInput, 'name' | 'email' | 'password'>

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export type SignInData = z.infer<typeof signInSchema>
