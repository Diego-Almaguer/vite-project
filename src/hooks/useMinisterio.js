import React ,{ useState, useEffect } from "react";
import GetMinisterio from "../services/ministerio.js";



export const useMinisterio = () => {
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

export const useOsde = () => {
    const [osdes, setOsdes] = useState([]);
    
    useEffect(() => {
        GetMinisterio()
            .then(data => {
                setOsdes(data); // Asegúrate de que setMinisterios existe aquí
            })
            .catch(error => console.error("Error al cargar los ministerios:", error));
    }, [setOsdes]);

    console.log(osdes);

    return { osdes }; // Retorna tanto el estado y su setter
};


export const useMunicipio = () => {
    const [municipios, setMunicipios] = useState([]);
    
    useEffect(() => {
        GetMinisterio()
            .then(data => {
                setMunicipios(data); // Asegúrate de que setMinisterios existe aquí
            })
            .catch(error => console.error("Error al cargar los ministerios:", error));
    }, [setMunicipios]);

    console.log(municipios);

    return { municipios }; // Retorna tanto el estado y su setter
};

export default {
    useMinisterio,
    useOsde,
    useMunicipio
}