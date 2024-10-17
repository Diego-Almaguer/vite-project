import { useState } from 'react'
import axios from 'axios'
import { useNavigate  } from "react-router-dom";
//import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
const rangoimp=[
  {nombre:"Sub Teniente"},
  {nombre:"Teniente"},
  {nombre:"Capitan"}
]
export default function InspectFormComp({municipio}) {
  const [rango,setRango]=useState("Sub Teniente")
  const [municipios,setMunicipio]=useState("1")
    const [data,setData] = useState({
      ci:"",
      nombre:"",
      apellido:"",
      
      edad:"",
      
      
  })
    //const navigate=useNavigate()
    const HandleInput=(e)=>{
        const {name,value}=e.target
        //console.log('Cambio:', name, value);
        setData(state=>({...state,[name]:value}))
        //console.log(data);
        

    }

    const HandleSubmmit = async(e)=>{
        e.preventDefault();
        const newdata = {...data,rango:rango,municipio:municipios} 
        const response = await axios.post("http://localhost:8080/inspectorcontroller",newdata);
        if (response.response === 400 && response.response===500) {
            alert("Login error , ha ocurrido un error")
        }
        else{
          alert("Inspector registrado correctamente")
          //window.location.reload()
          
        }
        
        console.log(newdata);
        
    }


  return (
    <form onSubmit={HandleSubmmit}>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Registrar Inspector</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="ci" className="block text-sm font-medium leading-6 text-gray-900">
                Carnet de Identidad
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  
                  <input
                    onChange={HandleInput}
                    id="ci"
                    name="ci"
                    type="text"
                    value={data.ci}
                    placeholder="123456789"
                    required
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="nombre" className="block text-sm font-medium leading-6 text-gray-900">
                Nombre
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                 
                  <input
                    onChange={HandleInput}
                    id="nombre"
                    name="nombre"
                    type="text"
                    value={data.nombre}
                    placeholder="diego"
                    required
                    
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="apellido" className="block text-sm font-medium leading-6 text-gray-900">
                Apellido
              </label>
              <div className="mt-2">
                <input
                  onChange={HandleInput}
                  id="apellido"
                  name="apellido"
                  type="text"
                  value={data.apellido}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="edad" className="block text-sm font-medium leading-6 text-gray-900">
                Edad
              </label>
              <div className="mt-2">
                <input
                  onChange={HandleInput}
                  id="edad"
                  name="edad"
                  type="date"
                  value={data.edad}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="rango" className="block text-sm font-medium leading-6 text-gray-900">
                Rango
              </label>
              <div className="mt-2">
                <select
                  onChange={(e)=>setRango(e.target.value)}
                  id="rango"
                  name="rango"
                  value={rango}
                  defaultValue={rango}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {rangoimp.map(item=><option key={item.nombre}>{item.nombre}</option>)}
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="municipio" className="block text-sm font-medium leading-6 text-gray-900">
                Municipio
              </label>
              <div className="mt-2">
                <select
                 onChange={(e)=>setMunicipio(parseInt(e.target.value))}
                  id="municipio"
                  name="municipio"
                  defaultValue= {municipios}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {municipio.map(item=><option key={item.id} value={item.id}>{item.nombre}</option>)}
                  
                </select>
              </div>
            </div>

          </div>
        </div>

        
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6 px-6 py-12">
      <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={() => window.location.assign('/')}>
          Atras
        </button>
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