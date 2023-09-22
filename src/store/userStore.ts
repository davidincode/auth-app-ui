import { create } from 'zustand'
import type { User } from '../schema/userSchema'

interface UserStore {
  authenticatedUser: User
  setAuthenticatedUser: (user: User) => void
}

export const useUserStore = create<UserStore>((set, _get) => ({
  authenticatedUser: {} as User,
  setAuthenticatedUser: (user: User) => set({ authenticatedUser: user }),
}))
