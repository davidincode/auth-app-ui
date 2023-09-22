import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'

import { useUserStore } from '../store/userStore'
import { useFetchStore } from '../store/useFetchStore'
import { createLocalAccount } from '../service/auth'

import type { User } from '../schema/userSchema'
import type { SignUpData } from '../schema/authSchema'
import { AxiosError } from 'axios'

export const useAuth = () => {
  const [unauthenticatedUser, setUnauthenticatedUser] = useState<SignUpData>(
    {} as SignUpData,
  )

  const { setAuthenticatedUser } = useUserStore()
  const { setGlobalFetchState } = useFetchStore()

  const { isLoading, refetch } = useQuery({
    queryKey: ['user'],
    queryFn: () => createLocalAccount(unauthenticatedUser),
    enabled: false,
    onError: error => {
      if (error instanceof AxiosError) {
        if (error.response?.data?.issue) {
          setGlobalFetchState({
            state: 'failed',
            message: error.response.data.issue[0]?.message,
          })
        }
      } else {
        setGlobalFetchState({
          state: 'failed',
          message:
            'Apparently something went wrong on our side, we are working on fixing it',
        })
      }
    },
    onSuccess: (authenticatedUser: User) => {
      setAuthenticatedUser(authenticatedUser)
      setGlobalFetchState({
        state: 'success',
        message: 'User successfully registered',
      })
    },
  })

  useEffect(() => {
    if (isLoading) {
      setGlobalFetchState({ state: 'loading' })
    }
  }, [isLoading])

  const signupLocalUser = (unauthenticatedUser: SignUpData) => {
    setUnauthenticatedUser(unauthenticatedUser)
    refetch()
  }

  return { signupLocalUser }
}
