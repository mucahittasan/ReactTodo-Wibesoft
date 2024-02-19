'use client'
import { FaCheck } from 'react-icons/fa6'

interface CheckboxProps {
  checked: boolean
  onChange: (isChecked: boolean) => void
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <label className="cursor-pointer">
      <input
        onChange={() => onChange(checked)}
        type="checkbox"
        className="w-0 h-0 opacity-0 hidden peer"
        checked={checked}
        defaultChecked={checked}
      />
      <div
        className={`relative border-[2px] p-[2px] transition duration-300 border-gray-500 w-6 h-6 rounded-md`}
      >
        <div
          className={` transition duration-300 w-full h-full ${
            checked ? 'scale-[1]' : 'scale-0'
          }`}
        >
          <FaCheck className="bg-transparent w-full h-full" />
        </div>
      </div>
    </label>
  )
}

export default Checkbox
