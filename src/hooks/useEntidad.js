import { useEffect } from "react";
import useBearStore from "../contexts/useContext";
const useEntidad=()=>{
    const { entidades, loadEntidades } = useBearStore();
    useEffect(() => {
        loadEntidades();
      }, []);
      //const {user}=profile
      //console.log(user);

    return{entidades}
}
export default useEntidad