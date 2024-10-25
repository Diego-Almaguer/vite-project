import { useEffect } from "react";
import useBearStore from "../contexts/useContext";
const useInspector=()=>{
    const { inspectores, loadInspectores } = useBearStore();
    useEffect(() => {
        loadInspectores();
      }, []);
      //const {user}=profile
      //console.log(user);

    return{inspectores}
}
export default useInspector