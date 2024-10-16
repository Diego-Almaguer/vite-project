import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import useProfile from '../hooks/useProfile'
import InitComp from './initComp'


export default function HomeComp({userId}) {
  const {profile,user}=useProfile({userId})
  //console.log(user);
  
  
  
  return (
    <>
      <InitComp profile={profile} user={user}/>
      <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          </div>
      </header>
      <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{/* Your content */}</div>
      </main>
      
    </>
  )
}
