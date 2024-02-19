'use client'

import toast from 'react-hot-toast'
import { FaTrash } from 'react-icons/fa6'
import useTaskStore, { Task } from '../../stores/TaskStore'
import useAlertModal from '../../stores/useAlertModal'
import { AlertModal } from '../modals/AlertModal'
import Checkbox from '../ui/inputs/Checkbox'
import Input from '../ui/inputs/Input'
import TaskLabel from './TaskLabel'

interface Props {
  data: Task
  isEditing: boolean
  isDone: boolean
  onToggleItem: (item: Task) => void
  onChangeSubject: (item: Task, newSubject: string) => void
  onFinishEditing: (item: Task) => void
  onPressLabel: (item: Task) => void
  onRemove: (item: Task) => void
}

const TaskItem: React.FC<Props> = ({
  data,
  isEditing,
  isDone,
  onToggleItem,
  onChangeSubject,
  onFinishEditing,
  onPressLabel,
  onRemove,
}) => {
  const { isOpen, onClose, onOpen } = useAlertModal()
  const { setCurrentData, currentData } = useTaskStore()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeSubject(data, e.target.value)
  }

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (data.subject === '') {
        return toast.error('You have to write something')
      }
      onFinishEditing(data)
    }
  }

  const handleDeleteButton = () => {
    currentData !== null && onRemove(currentData)
    onClose()
  }

  return (
    <>
      <div className="flex items-center gap-x-4">
        <Checkbox
          checked={isDone}
          onChange={() => onToggleItem(data)}
        />
        {isEditing ? (
          <Input
            autoFocus
            type="text"
            placeholder="Type something.."
            handleChange={handleInputChange}
            value={data.subject}
            onKeyPress={handleInputKeyPress}
            className="bg-transparent border-none outline-none text-gray-500 md:text-xl text-lg flex-1"
          />
        ) : (
          <TaskLabel
            className={`md:text-xl text-lg font-semibold transition duration-300 truncate ${
              isDone ? 'line-through text-gray-500' : ''
            }`}
            onClick={() => onPressLabel(data)}
          >
            {data.subject}
          </TaskLabel>
        )}
        <button
          onClick={() => {
            setCurrentData(data)
            onOpen()
          }}
          className="ml-auto bg-red-500 w-8 h-8 rounded-md flex items-center justify-center transition duration-200 hover:bg-red-400 active:scale-[.95]"
        >
          <FaTrash />
        </button>
      </div>
      <AlertModal
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={handleDeleteButton}
      />
    </>
  )
}

export default TaskItem
