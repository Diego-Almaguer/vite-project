import { useState } from 'react'
import axios from 'axios'
import { useNavigate  } from "react-router-dom";
//import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
const dataUser={
    username:"",
    password:"",
    nombre:"",
    apellido:"",
    email:"",
    rango:"",
    admin:false
}
export default function CreateUserComp() {
  const [data,setData] = useState(dataUser)
  const navigate=useNavigate()
    const HandleInput=(e)=>{
        const {name,value}=e.target
        setData({...data,[name]:value})
        //console.log(data);
        

    }

    const HandleSubmmit = async(e)=>{
        e.preventDefault();
        const newdata = {user:{...data},profile:{foto:null}} 
        const response = await axios.post("http://localhost:8080/usercontroller/create",newdata);
        if (response.response === 400 && response.response===500) {
            alert("Login error , ha ocurrido un error")
        }
        else{
          alert("Usuario creado correctamente")
          const {profileId}=response.data
          navigate(`/${profileId}`)
        }
        
        
    }


  return (
    <form onSubmit={HandleSubmmit}>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  
                  <input
                    onChange={HandleInput}
                    id="username"
                    name="username"
                    type="text"
                    value={data.username}
                    placeholder="janesmith"
                    autoComplete="janesmith"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                 
                  <input
                    onChange={HandleInput}
                    id="password"
                    name="password"
                    type="password"
                    value={data.password}
                    placeholder="password"
                    //autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Primer Nombre
              </label>
              <div className="mt-2">
                <input
                  onChange={HandleInput}
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={data.nombre}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Apellido
              </label>
              <div className="mt-2">
                <input
                  onChange={HandleInput}
                  id="apellido"
                  name="apellido"
                  type="text"
                  value={data.apellido}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={HandleInput}
                  id="email"
                  name="email"
                  type="email"
                  value={data.email}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Rango
              </label>
              <div className="mt-2">
                <select
                  onChange={HandleInput}
                  id="rango"
                  name="rango"
                  value={data.rango}
                  autoComplete="rango"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Sub Teniente</option>
                  <option>Teniente</option>
                  <option>Capitan</option>
                </select>
              </div>
            </div>

          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            We'll always let you know about important changes, but you pick what else you want to hear about.
          </p>

          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      onChange={HandleInput}
                      onClick={()=>{data.admin=true}}
                      id="admin"
                      name="admin"
                      type="checkbox"
                      value={data.admin}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="admin" className="font-medium text-gray-900">
                      admin
                    </label>
                    <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                  </div>
              </div>
              </div>
            </fieldset>
            
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6 px-6 py-12">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={() => window.location.reload()}>
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}
