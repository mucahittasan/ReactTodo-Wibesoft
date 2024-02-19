import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import PageLoading from '../features/PageLoading'

const Main = () => {
  return (
    <main className="w-full flex-1">
      <Suspense fallback={<PageLoading />}>
        <Outlet />
      </Suspense>
    </main>
  )
}

export default Main
