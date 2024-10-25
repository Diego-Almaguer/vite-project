import useProfile from "../hooks/useProfile";
import {useParams} from 'react-router-dom'

import HomeComp from "./homeComp";
import ReportFormComp from "./reportFormComp";
import useEntidad from "../hooks/useEntidad";
import useInspector from "../hooks/useInspector";

const CreateReport=()=>{
    const {userId} = useParams()
    const {profile,user}=useProfile({userId})
    const{entidades}=useEntidad()
    const{inspectores}=useInspector()
    //console.log(municipio);
    
    
    
    return (
        <>
            <HomeComp profile={profile} user={user}/>
            
            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <ReportFormComp inspectores={inspectores} entidades={entidades}/>
                </div>
            </main>

        </>
    )
}

export default CreateReport