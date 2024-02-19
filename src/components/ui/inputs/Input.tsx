import React, { ChangeEvent, KeyboardEvent } from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type: string
  placeholder?: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void
}

const Input: React.FC<Props> = ({
  type,
  placeholder,
  handleChange,
  value,
  onKeyPress,
  ...props
}) => {
  return (
    <>
      <input
        {...props}
        type={type}
        placeholder={placeholder ? placeholder : ''}
        onChange={handleChange}
        value={value}
        onKeyPress={onKeyPress}
      />
    </>
  )
}

export default Input
