import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
//import useUserId from "../hooks/useUserId"

export default function LoginComp() {
  
  const navigate = useNavigate()
    const [data,setData] = useState({username:"",password:""})
    const HandleInput=(e)=>{
        const {name,value}=e.target
        setData({...data,[name]:value})
        //console.log(data);
        

    }

    const HandleSubmmit = async(e)=>{
        e.preventDefault();
        const newdata = {username:data.username,password:data.password} 
        const response = await axios.post("http://localhost:8080/usercontroller/login",null,
            {
               params:{...newdata}
            }
        );
        if (response.status === 400 ) {
            alert("Login error , ha ocurrido un error")
        }
        else{
          alert("Login sucsessfuly")
          const{userId}=response.data
          navigate(`/${userId}`)
        }
        
       
    }

    
    

    return (
      <>
       
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Inicie sesion en su cuenta
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={HandleSubmmit} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    onChange={HandleInput}
                    id="username"
                    name="username"
                    type="text"
                    value={data.username}
                    required
                    autoComplete="username"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    onChange={HandleInput}
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={data.password}
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                    type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Enviar
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              No tiene una cuenta ?{' '}
              <a href="/createUser" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Crear Cuenta 
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }
  