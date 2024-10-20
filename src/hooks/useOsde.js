import { useEffect } from "react";
import useBearStore from "../contexts/useContext";
const useOsde=()=>{
    const { osde, loadOsdes } = useBearStore();
    useEffect(() => {
        loadOsdes();
      }, []);
      //const {user}=profile
      //console.log(user);

    return{osde}
}
export default useOsde