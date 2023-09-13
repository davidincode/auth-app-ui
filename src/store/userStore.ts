import { create } from 'zustand'
import type { SignUpData } from '../schema/authSchema'

interface User {
  id: string
  name: string
  photo: string | null
  bio: string | null
  phone: string | null
  email: string
  emailVerified: boolean
  password: string
  createdAt: string
  updatedAt: string
}

interface UserStore {
  user: User
  signUp: ({ name, email, password }: SignUpData) => Promise<void>
}

interface Response {
  user: User
  emailSent: boolean
}

export const useUserStore = create<UserStore>((set, get) => ({
  user: {} as User,
  signUp: async ({ name, email, password }) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/auth/register`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      },
    )
    const data: Response = await response.json()
    console.log(data)
    set({ user: data.user })
    console.log('User: ', get().user)
  },
}))
