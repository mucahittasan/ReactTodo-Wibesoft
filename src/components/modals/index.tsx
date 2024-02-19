'use client'

import { useEffect, useState } from 'react'

interface ModalProps {
  title: string
  description: string
  isOpen: boolean
  onClose: () => void
  children?: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({
  title,
  description,
  isOpen,
  onClose,
  children,
}) => {
  const [showModal, setShowModal] = useState(isOpen)

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  return (
    <div
      onClick={() => onClose()}
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70"
    >
      <div className="relative w-[95%] md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-auto ">
        {/* CONTENT */}
        <div
          className={`translate duration-300 h-full ${
            showModal ? 'translate-y-0' : 'translate-y-full'
          } ${showModal ? 'opacity-100' : 'opacity-0'}`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
          >
            <div className="text-black p-3">
              <h1 className="font-bold text-2xl">{title}</h1>
              <p className="font-medium text-zinc-500 text-base">
                {description}
              </p>
            </div>
            <div className="mt-auto">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
