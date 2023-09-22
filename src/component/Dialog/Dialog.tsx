import { useRef, useEffect } from 'react'
import { useFetchStore } from '../../store/useFetchStore'
import Loader from '../Loader/Loader'

const Dialog = () => {
  const { globalFetchState, isFetching, resetGlobalFetchStore } =
    useFetchStore()
  const dialogRef = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    globalFetchState.state !== 'idle' && dialogRef.current?.showModal()
  }, [globalFetchState])

  const closeModal = () => {
    resetGlobalFetchStore()
    dialogRef.current?.close()
  }

  return (
    <dialog data-modal ref={dialogRef}>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <p>{globalFetchState.message}</p>
          <button onClick={closeModal}>Close</button>
        </>
      )}
    </dialog>
  )
}

export default Dialog
