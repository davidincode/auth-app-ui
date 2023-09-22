import { create } from 'zustand'

type FetchState = 'idle' | 'loading' | 'success' | 'failed'

interface globalFetchState {
  state: FetchState
  message?: string
}

interface FetchStore {
  globalFetchState: globalFetchState
  isFetching: boolean
  isSuccess: boolean
  isError: boolean
  setGlobalFetchState: (updatedState: globalFetchState) => void
  resetGlobalFetchStore: () => void
}

export const useFetchStore = create<FetchStore>((set, _get) => ({
  globalFetchState: {
    state: 'idle',
    message: '',
  },
  isFetching: false,
  isSuccess: false,
  isError: false,
  setGlobalFetchState: ({ state, message }: globalFetchState) =>
    set({
      globalFetchState: { state, message },
      isFetching: state === 'loading',
      isSuccess: state === 'success',
      isError: state === 'failed',
    }),
  resetGlobalFetchStore: () =>
    set({
      globalFetchState: { state: 'idle', message: '' },
      isFetching: false,
      isSuccess: false,
      isError: false,
    }),
}))
