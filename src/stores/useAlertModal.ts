import { create } from 'zustand'

interface AlertModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const useAlertModal = create<AlertModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))

export default useAlertModal
