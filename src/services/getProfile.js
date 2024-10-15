import axios from "axios"
export  async function GetProfile({profileId}){

   const response = await axios.get(`http://localhost:8080/profilecontroller/${profileId}`)
   console.log(response.data);
   return response.data
   
} 

    export default GetProfile