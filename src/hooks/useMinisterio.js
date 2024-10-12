import React ,{ useState, useEffect } from "react";
import MinisterioService from "../services/ministerio.js";

export default function useMinisterio() {
  
    const {ministerios,setMinisterios}=useState([])

    //const  [products, setProducts] = useState([])

    useEffect(() => {
        MinisterioService()
        .then(data => {
            setMinisterios(data)
        })
        
        
    },[])


    console.log(ministerios);
    
    return {ministerios}
}