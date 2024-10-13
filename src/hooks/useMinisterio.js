import React ,{ useState, useEffect } from "react";
import GetMinisterio from "../services/ministerio.js";



 const useMinisterio = () => {
    const [ministerios, setMinisterios] = useState([]);
    
    useEffect(() => {
        GetMinisterio()
            .then(data => {
                setMinisterios(data); // Asegúrate de que setMinisterios existe aquí
            })
            .catch(error => console.error("Error al cargar los ministerios:", error));
    }, [setMinisterios]);

    console.log(ministerios);

    return { ministerios }; // Retorna tanto el estado y su setter
};

 

 

export default useMinisterio
