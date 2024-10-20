import { useParams } from "react-router-dom"
//import InitComp from "./initComp"
import useProfile from "../hooks/useProfile"
import HomeComp from "./homeComp"
import EmpresaFormComp from "./empresaFormComp"
import useMunicipio from "../hooks/useMunicipio"
import useOsde from "../hooks/useOsde"
const CreateEmpresas = ()=>{
    const {userId}=useParams()
    const {profile,user,removeProfile}=useProfile({userId})
    const{municipio}=useMunicipio()
    const {osde}=useOsde()
    console.log(osde);
    

    return(
        <>
           <HomeComp profile={profile} user={user} removeProfile={removeProfile}/>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Registrar Empresas</h1>
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <EmpresaFormComp municipio={municipio} osde={osde}/>
                </div>
            </main>
        </>
    )
}

export default CreateEmpresas