import { useEffect } from "react";
import useBearStore from "../contexts/useContext";
const useMunicipio=()=>{
    const { municipio, loadMunicipios } = useBearStore();
    useEffect(() => {
        loadMunicipios();
      }, []);
      //const {user}=profile
      //console.log(user);

    return{municipio}
}
export default useMunicipio