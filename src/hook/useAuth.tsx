import { useMutation } from 'react-query'

import { useUserStore } from '../store/userStore'
import { useFetchStore } from '../store/useFetchStore'
import { createLocalAccount } from '../service/auth'
import { useError } from './useError'

import type { User } from '../schema/userSchema'
import type { SignUpData } from '../schema/authSchema'

export const useAuth = () => {
  const { setAuthenticatedUser } = useUserStore()
  const { setGlobalFetchState } = useFetchStore()
  const { handleError } = useError()

  const signupMutation = useMutation(createLocalAccount, {
    onError: error => {
      handleError(error)
    },
    onSuccess: (authenticatedUser: User) => {
      setAuthenticatedUser(authenticatedUser)
      setGlobalFetchState({
        state: 'success',
        message: 'User successfully registered',
      })
    },
  })

  const signupLocalUser = (unauthenticatedUser: SignUpData) => {
    signupMutation.mutate(unauthenticatedUser)
  }

  return { signupLocalUser }
}
