import { SignUpData } from '../schema/authSchema'
import axios, { type AxiosResponse } from 'axios'
import type { User } from '../schema/userSchema'

// Environment Variable
const { VITE_API_BASE_URL } = import.meta.env

interface SignUpResponse {
  user: User
  emailSent: boolean
}

export const createLocalAccount = async ({
  name,
  email,
  password,
}: SignUpData) => {
  const { data }: AxiosResponse<SignUpResponse> = await axios.post(
    `${VITE_API_BASE_URL}/auth/register`,
    { name, email, password },
    {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    },
  )
  return data.user
}
