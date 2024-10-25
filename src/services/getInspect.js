import axios from "axios"
export  async function GetInspector(){

    const response = await axios.get(`http://localhost:8080/inspectorcontroller`)
    //console.log(response.data);
    return response.data
    
 } 
 
     export default GetInspector