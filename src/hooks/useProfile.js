import React ,{ useState, useEffect } from "react";
//import GetProfile from "../services/getProfile";
import useBearStore from "../contexts/useContext";


 /*const useProfile = ({userId}) => {
    const [profile, setProfile] = useState(null);
    
    useEffect(() => {
        GetProfile({userId})
            .then(data => {
                setProfile(data); // Asegúrate de que setMinisterios existe aquí
            })
            .catch(error => console.error("Error al cargar los ministerios:", error));
    }, [setProfile]);

    //console.log(profile);

    return { profile }; // Retorna tanto el estado y su setter
};*/

const useProfile=({userId})=>{
    const { profile, loadProfile ,user ,removeProfile} = useBearStore();
    useEffect(() => {
        loadProfile(userId);
      }, [userId]);
      //const {user}=profile
      //console.log(user);

    return{profile,user,removeProfile}
}

 

 

export default useProfile
