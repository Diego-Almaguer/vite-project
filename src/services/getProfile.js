import axios from "axios"
export  async function GetProfile({userId}){

   const response = await axios.get(`http://localhost:8080/profilecontroller/${userId}`)
   //console.log(response.data);
   return response.data
   
} 

    export default GetProfile