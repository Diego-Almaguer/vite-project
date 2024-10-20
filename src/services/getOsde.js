import axios from "axios"
export  async function GetOsde(){

    const response = await axios.get(`http://localhost:8080/ministeriocontroller/osde`)
    //console.log(response.data);
    return response.data
    
 } 
 
     export default GetOsde