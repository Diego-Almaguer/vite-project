import axios from "axios"
export  async function GetMunicipio(){

    const response = await axios.get(`http://localhost:8080/ministeriocontroller/municipio`)
    //console.log(response.data);
    return response.data
    
 } 
 
     export default GetMunicipio