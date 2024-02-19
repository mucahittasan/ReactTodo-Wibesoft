'use client'

import { useEffect, useState } from 'react'
import { Modal } from '.'

interface AlertModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm?: () => void
  loading?: boolean
}

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Modal
      title="Are you sure?"
      description="This action cannot be undone."
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="pt-6 space-x-6 flex items-center justify-end w-full text-black font-medium p-3 ">
        <button
          disabled={loading}
          onClick={onClose}
          className="text-zinc-400"
        >
          Cancel
        </button>
        <button
          disabled={loading}
          onClick={onConfirm}
          className="rounded-md px-4 py-2 text-white bg-red-500 hover:bg-red-400 transition duration-200"
        >
          Continue
        </button>
      </div>
    </Modal>
  )
}
