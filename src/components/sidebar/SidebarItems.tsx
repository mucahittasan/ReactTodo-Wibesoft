import { Link, useLocation } from 'react-router-dom'
import { sidebarItems } from '../../constants/SidebarItems'

const SidebarItems = () => {
  const location = useLocation()

  return (
    <ul className="flex flex-col gap-y-3">
      {sidebarItems.map((item, i) => (
        <li key={i}>
          <Link
            to={item.href}
            className={`flex items-center gap-x-2 font-medium text-lg transition duration-200 ${
              location.pathname === item.href
                ? 'bg-white text-black'
                : 'bg-transparent text-white'
            }  p-3 rounded-lg`}
          >
            <item.icon />
            <span>{item.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default SidebarItems
