import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
//import axios from 'axios'
//import useProfile from '../hooks/useProfile'
import InitComp from './initComp'


export default function HomeComp({profile,user,removeProfile}) {
  
  
  /*if (!user) {
    return <h1>hola mundo</h1>;
  }*/

  return (
    <>
      <InitComp profile={profile} user={user} removeProfile={removeProfile}/>
      
    </>
  );
}
