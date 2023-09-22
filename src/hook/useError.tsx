import { useFetchStore } from '../store/useFetchStore'
import { AxiosError } from 'axios'

export const useError = () => {
  const { setGlobalFetchState } = useFetchStore()
  const handleError = (error: unknown) => {
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
  }

  return { handleError }
}
