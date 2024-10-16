import useProfile from "../hooks/useProfile";
import InitComp from "./initComp";
import {useParams} from 'react-router-dom'

const CreateInspectores=()=>{
    const {userId} = useParams()
    const {profile,user}=useProfile({userId})
    
    
    
    
    return (
        <>
            <InitComp profile={profile} user={user}/>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Registrar Inspectores</h1>
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{/* Your content */}</div>
            </main>

        </>
    )
}

export default CreateInspectores