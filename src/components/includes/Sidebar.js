import {
  ChartBarIcon,
  ClipboardIcon,
  TruckIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import {
  ChartBarIcon as ChartActive,
  ClipboardIcon as ClipActive,
  TruckIcon as TruckActive,
  UserGroupIcon as UserActive,
  ViewGridIcon,
} from '@heroicons/react/solid';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  {
    name: 'Dashboard',
    href: '/',
    current: true,
    icon: ChartBarIcon,
    iconActive: ChartActive,
  },
  {
    name: 'Pengajuan',
    href: '/pengajuan',
    current: false,
    icon: ClipboardIcon,
    iconActive: ClipActive,
  },
  {
    name: 'Tracking',
    href: '/tracking',
    current: false,
    icon: TruckIcon,
    iconActive: TruckActive,
  },
  {
    name: 'Karyawan',
    href: '/karyawan',
    current: false,
    icon: UserGroupIcon,
    iconActive: UserActive,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="hidden lg:block lg:col-span-3 xl:col-span-3 bg-white p-2 rounded-md h-fit pb-24 sticky top-4">
      {/* Avatar */}

      <div className="relative flex flex-col justify-center items-center mt-6 mb-16">
        <span className="inline-block relative">
          <img
            className="h-16 w-16 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <span className="absolute top-0 right-0 block h-4 w-4 rounded-full ring-2 ring-white bg-green-400" />
        </span>
        <h1 className="font-medium text-gray-800 mt-2">Abdul Muchtar Astria</h1>
        <p className="text-sm mt-0.5 font-light text-gray-400">
          abdul.muchtar@pins.co.id
        </p>
      </div>

      <nav aria-label="Sidebar" className="space-y-4 mx-8">
        {/* Your content */}
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={classNames(
              location.pathname === item.href
                ? 'bg-blue-500 text-white'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
              'flex items-center px-3 py-2 space-x-2 leading-relaxed text-base font-medium transition-all duration-300 rounded-md',
            )}
            aria-current={item.current ? 'page' : undefined}>
            {location.pathname === item.href ? (
              <item.iconActive className="h-5" />
            ) : (
              <item.icon className="h-5" />
            )}
            <span className="truncate">{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="absolute bottom-4 w-full left-0 flex justify-center">
        <div className="bg-none border  justify-center hover:bg-blue-500 hover:text-white w-3/4 flex items-center py-2 space-x-1.5 text-sm font-medium transition-all duration-300 rounded-md cursor-pointer text-gray-600">
          <ViewGridIcon className="h-4" />
          <span className="truncate">Go to APPS</span>
        </div>
      </div>
    </div>
  );
}
