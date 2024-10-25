import axios from "axios"
export  async function GetEntidad(){

    const response = await axios.get(`http://localhost:8080/entidadcontroller`)
    //console.log(response.data);
    return response.data
    
 } 
 
     export default GetEntidad