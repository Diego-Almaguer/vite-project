import { useState } from 'react'
import axios from 'axios'
import { useNavigate  } from "react-router-dom";
//import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function ReportFormComp({inspectores,entidades}) {
  const [inspector,setInspector]=useState(1)
  const [entidad,setEntidad]=useState(1)
  const [multa,setMulta]=useState(false)
    const [data,setData] = useState({
      
      nombre:"",
      descripcion:"",
      fecha:"",
      precio:null,
      descripcion_multa:"",
      fecha_multa:""

    })
    
    const HandleInput=(e)=>{
        const {name,value}=e.target
        //console.log('Cambio:', name, value);
        setData(state=>({...state,[name]:value}))
        console.log(data);
        

    }

    const HandleSubmmit = async(e)=>{
        e.preventDefault();
        const data_deficiencia = {nombre:data.nombre,descripcion:data.descripcion,fecha:data.fecha,entidad:entidad,inspector:inspector} 
        const data_multa={precio:Number(data.precio),descripcion:data.descripcion_multa,fecha:data.fecha_multa,entidad:entidad,inspector:inspector}
        const response_def = await axios.post("http://localhost:8080/deficienciacontroller",data_deficiencia);
        if (multa==true) {
          const response_multa = await axios.post("http://localhost:8080/multacontroller",data_multa);
          if (response_def.response === 400&&500 || response_multa.response===400&&500) {
            alert("Login error , ha ocurrido un error")
          }
          else{
            alert("Reporte registrado correctamente")
            //window.location.reload()
          
          }
        }
        
        
        
    }


  return (
    <form onSubmit={HandleSubmmit}>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Registrar Deficiencia</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                    placeholder="123456789"
                    required
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="descripcion" className="block text-sm font-medium leading-6 text-gray-900">
                Descripcion
              </label>
              <div className="mt-2">
                <textarea
                  onChange={HandleInput}
                  id="descripcion"
                  name="descripcion"
                  type='text'
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  value={data.descripcion}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
            </div>

            
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        
            <div className="sm:col-span-3">
              <label htmlFor="entidad" className="block text-sm font-medium leading-6 text-gray-900">
                Entidad
              </label>
              <div className="mt-2">
                <select
                  onChange={(e)=>setEntidad(e.target.value)}
                  id="entidad"
                  name="entidad"
                  
                  defaultValue={entidad}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {entidades?.map(item=><option key={item.id} value={item.id}>{item.nombre}</option>)}
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="inspector" className="block text-sm font-medium leading-6 text-gray-900">
                Inspectores
              </label>
              <div className="mt-2">
                <select
                 onChange={(e)=>setInspector(e.target.value)}
                  id="inspector"
                  name="inspector"
                  defaultValue= {inspector}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {inspectores?.map(item=><option key={item.id} value={item.id}>{item.rango+" "+item.nombre + " "+item.apellido}</option>)}
                  
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="fecha" className="block text-sm font-medium leading-6 text-gray-900">
                Fecha
              </label>
              <div className="mt-2">
                <input
                  onChange={HandleInput}
                  id="fecha"
                  name="fecha"
                  type="date"
                  value={data.fecha}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        
        <div className="border-b border-gray-900/10 pb-12">
        <div className="sm:col-span-3 py-8 lg:px-8">
            <button type="button" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => setMulta(multa?false:true)}>
              Aplicar Multa
            </button>
            
        </div>
          {multa?(
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
              <label htmlFor="precio" className="block text-sm font-medium leading-6 text-gray-900">
                Precio
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  
                  <input
                    onChange={HandleInput}
                    id="precio"
                    name="precio"
                    type="number"
                    value={data.precio}
                    placeholder="123456789"
                    required
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="descripcion_multa" className="block text-sm font-medium leading-6 text-gray-900">
                Descripcion
              </label>
              <div className="mt-2">
                <textarea
                  onChange={HandleInput}
                  id="descripcion_multa"
                  name="descripcion_multa"
                  value={data.descripcion_multa}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="entidad" className="block text-sm font-medium leading-6 text-gray-900">
                Entidad
              </label>
              <div className="mt-2">
                <select
                  onChange={(e)=>setEntidad(e.target.value)}
                  id="entidad"
                  name="entidad"
                  
                  defaultValue={entidad}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {entidades?.map(item=><option key={item.id} value={item.id}>{item.nombre}</option>)}
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="inspector" className="block text-sm font-medium leading-6 text-gray-900">
                Inspector
              </label>
              <div className="mt-2">
                <select
                 onChange={(e)=>setInspector(e.target.value)}
                  id="inspector"
                  name="inspector"
                  defaultValue= {inspector}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {inspectores?.map(item=><option key={item.id} value={item.id}>{item.nombre}</option>)}
                  
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="edad" className="block text-sm font-medium leading-6 text-gray-900">
                Fecha
              </label>
              <div className="mt-2">
                <input
                  onChange={HandleInput}
                  id="edad"
                  name="edad"
                  type="date"
                  value={data.fecha_multa}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          ):null}
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