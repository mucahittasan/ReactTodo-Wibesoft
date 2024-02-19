import { FaAngleLeft } from 'react-icons/fa6'
import useSidebar from '../../stores/useSidebar'
import SidebarItems from './SidebarItems'

const Sidebar = () => {
  const { onClose, isOpen } = useSidebar()

  return (
    <div
      onClick={() => onClose()}
      className={`${
        isOpen ? 'opacity-[1] visible' : 'opacity-0 invisible'
      } bg-black/70 w-full h-full fixed top-0 left-0 z-[999] transition-all duration-300`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${
          isOpen ? 'w-[300px]' : 'w-0'
        } h-full background-gradient flex flex-col gap-y-12 p-6 px-8 transition-all duration-300`}
      >
        <button
          onClick={onClose}
          className="ml-auto p-2 rounded-full text-white border border-white active:scale-[.95]"
        >
          <FaAngleLeft />
        </button>
        <div className="rounded-full w-32 h-32 border-[2px] border-purple-500 ">
          <img
            src="/images/profile-image.png"
            className="w-full h-full bg-cover bg-no-repeat rounded-full"
          />
        </div>
        <SidebarItems />
      </div>
    </div>
  )
}

export default Sidebar
