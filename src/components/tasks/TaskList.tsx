import { useCallback } from 'react'
import useTaskStore, { Task } from '../../stores/TaskStore'
import EmptyContent from '../EmptyContent'
import TaskItem from './TaskItem'

const TaskList = () => {
  const { data, editingItemId, setEditingItemId, setData } = useTaskStore()

  // Toggle for item is done
  const handleToggleTaskItem = useCallback(
    (item: Task) => {
      // First we get all prevData and finding current item index and updated done
      const newData = [...data]
      const index = data.indexOf(item)
      newData[index] = {
        ...item,
        done: !item.done,
      }
      setData(newData)
    },
    [data, setData],
  )

  // This is for change the item text
  const handleChangeTaskItemSubject = useCallback(
    (item: Task, newSubject: string) => {
      // First we get all prevData and finding current item index and updated text
      const newData = [...data]
      const index = data.indexOf(item)
      newData[index] = {
        ...item,
        subject: newSubject,
      }
      setData(newData)
    },
    [data, setData],
  )

  // When we are finish for updating text, setEditinItemId will be null and input for changing text is will be gone
  const handleFinishEditingTaskItem = useCallback(() => {
    setEditingItemId(null)
  }, [setEditingItemId])

  // When clicking the item, the current item will be editible
  const handlePressTaskItemLabel = useCallback(
    (item: Task) => {
      setEditingItemId(item.id)
    },
    [setEditingItemId],
  )

  const handleRemoveItem = useCallback(
    (item: Task) => {
      const newData = data.filter((i) => i !== item)
      setData(newData)
    },
    [data, setData],
  )

  if (data.length === 0) {
    return (
      <EmptyContent
        title="Empty Task"
        description="There is no any task item to see!"
        secondDescription="You can add task item by clicking the plus button below.."
      />
    )
  }

  return (
    <div className="flex flex-col gap-y-6">
      {data.map((item) => (
        <TaskItem
          key={item.id}
          data={item}
          isDone={item.done}
          isEditing={item.id === editingItemId}
          onToggleItem={handleToggleTaskItem}
          onChangeSubject={handleChangeTaskItemSubject}
          onFinishEditing={handleFinishEditingTaskItem}
          onPressLabel={handlePressTaskItemLabel}
          onRemove={handleRemoveItem}
        />
      ))}
    </div>
  )
}

export default TaskList
