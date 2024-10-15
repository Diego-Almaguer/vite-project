import React ,{ useState, useEffect } from "react";
import GetProfile from "../services/getProfile";



 const useProfile = ({userId}) => {
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
};

 

 

export default useProfile
