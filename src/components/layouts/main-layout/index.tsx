import { Toaster } from 'react-hot-toast'
import { useLocation } from 'react-router-dom'
import Footer from '../../footer'
import Header from '../../header'
import AboutHeader from '../../header/AboutHeader'
import Main from '../../main'
import Sidebar from '../../sidebar/Sidebar'

const MainLayout = () => {
  const location = useLocation()

  return (
    <div className="h-full flex flex-col">
      <Toaster position="top-center" />
      <Sidebar />
      {location.pathname === '/' ? <Header /> : <AboutHeader />}
      <div className=" -mt-12 background-gradient min-h-[calc(100vh-252px)] rounded-tl-3xl rounded-tr-3xl flex z-10">
        <div className="w-full max-w-[600px] mx-auto py-6 text-white flex flex-col min-h-full flex-1 px-3">
          <Main />
          {location.pathname === '/' ? <Footer /> : null}
        </div>
      </div>
    </div>
  )
}

export default MainLayout
