import { IconType } from 'react-icons'
import { BsInbox } from 'react-icons/bs'
import { CiCircleInfo } from 'react-icons/ci'

interface SidebarItem {
  title: string
  href: string
  icon: IconType
}

export const sidebarItems: SidebarItem[] = [
  {
    title: 'Tasks',
    href: '/',
    icon: BsInbox,
  },
  {
    title: 'About',
    href: '/about',
    icon: CiCircleInfo,
  },
]
