import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const wait = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => resolve(), ms)
  })

const MainLayout = lazy(() =>
  wait(1000).then(() => import('../layouts/main-layout')),
)
const App = lazy(() => wait(1000).then(() => import('../../App')))
const About = lazy(() => wait(1000).then(() => import('../../pages/about')))

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
])
