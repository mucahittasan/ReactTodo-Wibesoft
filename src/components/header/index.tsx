import { IoIosMenu } from 'react-icons/io'
import useSidebar from '../../stores/useSidebar'

const Header = () => {
  const { onOpen } = useSidebar()

  return (
    <header className="min-h-[300px] w-full bg-[url('/images/masthead.jpg')] bg-cover bg-center bg-no-repeat relative before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-black/30 before:z-[-1] z-[1] px-3">
      <div className=" max-w-[1200px] mx-auto w-full flex flex-col justify-between items-start  min-h-inherit py-6 pb-16">
        <button onClick={onOpen}>
          <IoIosMenu className="w-8 h-8 text-white" />
        </button>
        <h1 className="md:text-5xl text-3xl text-white font-bold">
          Welcome to ToDo!
        </h1>
      </div>
    </header>
  )
}

export default Header
