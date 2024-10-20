import useProfile from "../hooks/useProfile";
import InspectFormComp from "./inspectFormComp";
//import InitComp from "./initComp";
import {useParams} from 'react-router-dom'
import useMunicipio from "../hooks/useMunicipio";
import HomeComp from "./homeComp";

const CreateInspectores=()=>{
    const {userId} = useParams()
    const {profile,user}=useProfile({userId})
    const{municipio}=useMunicipio()
    //console.log(municipio);
    
    
    
    return (
        <>
            <HomeComp profile={profile} user={user}/>
            
            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <InspectFormComp municipio={municipio}/>
                </div>
            </main>

        </>
    )
}

export default CreateInspectores