import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  onClick: () => void
}

const TaskLabel: React.FC<Props> = ({ children, onClick, ...props }) => {
  return (
    <div
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  )
}

export default TaskLabel
