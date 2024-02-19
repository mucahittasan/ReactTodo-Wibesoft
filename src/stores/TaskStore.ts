import shortid from 'shortid'
import create from 'zustand'

const initialData = [
  {
    id: shortid.generate(),
    subject: 'Make Wibesoft Test Case',
    done: false,
  },
  {
    id: shortid.generate(),
    subject: 'Work on React Native',
    done: false,
  },
]

export interface Task {
  id: string
  subject: string
  done: boolean
}

interface TaskStore {
  data: Task[]
  currentData: Task | null
  editingItemId: string | null
  setData: (data: Task[]) => void
  setCurrentData: (currentData: Task) => void
  setEditingItemId: (id: string | null) => void
  handleToggleTaskItem: (item: Task) => void
  handleChangeTaskItemSubject: (item: Task, newSubject: string) => void
  handleFinishEditingTaskItem: () => void
  handlePressTaskItemLabel: (item: Task) => void
  handleRemoveItem: (item: Task) => void
  addTask: () => void
}

const useTaskStore = create<TaskStore>((set) => ({
  currentData: null,
  data: initialData,
  editingItemId: null,
  setData: (newData) => set({ data: newData }),
  setCurrentData: (currentData: Task) => set({ currentData: currentData }),
  setEditingItemId: (id) => set({ editingItemId: id }),
  handleToggleTaskItem: (item) => {
    set((state) => ({
      data: state.data.map((i) =>
        i.id === item.id ? { ...i, done: !i.done } : i,
      ),
    }))
  },
  handleChangeTaskItemSubject: (item, newSubject) => {
    set((state) => ({
      data: state.data.map((i) =>
        i.id === item.id ? { ...i, subject: newSubject } : i,
      ),
    }))
  },
  handleFinishEditingTaskItem: () => set({ editingItemId: null }),
  handlePressTaskItemLabel: (item) => set({ editingItemId: item.id }),
  handleRemoveItem: (item) => {
    set((state) => ({
      data: state.data.filter((i) => i !== item),
    }))
  },
  addTask: () => {
    const id = shortid.generate()
    set((state) => ({
      data: [{ id, subject: '', done: false }, ...state.data],
      editingItemId: id,
    }))
  },
}))

export default useTaskStore
