import { z } from 'zod'

const MAX_FILE_SIZE = 5000 * 1024
const ACCEPTED_IMAGE_TYPE = ['image/jpeg', 'image/png', 'image/webp']

export const userSchema = z.object({
  name: z.string().min(2).max(50).optional(),
  bio: z.string().max(200).optional(),
  phone: z
    .string()
    .regex(/^\d{10}$/)
    .optional(),
  email: z.string().email().optional(),
  password: z.string().min(6).optional(),
  photo: z
    .any()
    .refine((file: File) => file instanceof File, 'Expected a file')
    .refine(
      (file: File) => file.size <= MAX_FILE_SIZE,
      'File size should be less than 5 MB',
    )
    .refine(
      (file: File) => ACCEPTED_IMAGE_TYPE.includes(file.type),
      'Only .jpg, .jpeg, .png and .webp image format are supported',
    )
    .optional(),
})
