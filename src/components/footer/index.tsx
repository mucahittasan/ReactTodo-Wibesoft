'use client'

import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { HiOutlinePlusSm } from 'react-icons/hi'
import shortid from 'shortid'
import useTaskStore from '../../stores/TaskStore'

const Footer = () => {
  const { data, setData, setEditingItemId } = useTaskStore()

  const handleClick = () => {
    const haveEmptyItem = data.find((item) => item.subject === '')

    if (haveEmptyItem) return toast.error('You have already one empty item!')
    else {
      const id = shortid.generate()
      setData([
        {
          id,
          subject: '',
          done: false,
        },
        ...data,
      ])
      setEditingItemId(id)
    }
  }

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <button
      onClick={() => handleClick()}
      className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center text-2xl ml-auto transition hover:bg-white/80 active:scale-[.95]"
    >
      <HiOutlinePlusSm color="purple" />
    </button>
  )
}

export default Footer
