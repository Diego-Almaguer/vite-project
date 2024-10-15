import React ,{ useState, useEffect } from "react";
import GetProfile from "../services/getProfile";



 const useProfile = ({profileId}) => {
    const [profile, setProfile] = useState([]);
    
    useEffect(() => {
        GetProfile({profileId})
            .then(data => {
                setProfile(data); // Asegúrate de que setMinisterios existe aquí
            })
            .catch(error => console.error("Error al cargar los ministerios:", error));
    }, [setProfile]);

    console.log(profile);

    return { profile }; // Retorna tanto el estado y su setter
};

 

 

export default useProfile
