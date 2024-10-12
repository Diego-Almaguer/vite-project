export  function GetMinisterio(){

return fetch("http://localhost:8080/ministeriocontroller/ministerio")

.then((res)=>res.json())
.then((res)=> {
    const {data}=res
    const ministerios = data.map(item=>{
        const {id,nombre}=item
        return {id,nombre}
    })
    //console.log(data)
    return ministerios
    

})
} 

export  function GetOsde(){

    return fetch("http://localhost:8080/ministeriocontroller/osde")
    
    .then((res)=>res.json())
    .then((res)=> {
        const {data}=res
        const osdes = data.map(item=>{
            const {id,nombre,ministerio}=item
            return {id,nombre,ministerio}
        })
        //console.log(data)
        return osdes
        
    
    })
    } 

    export  function GetMunicipio(){

        return fetch("http://localhost:8080/ministeriocontroller/municipio")
        
        .then((res)=>res.json())
        .then((res)=> {
            const {data}=res
            const municipios = data.map(item=>{
                const {id,nombre}=item
                return {id,nombre}
            })
            //console.log(data)
            return municipios
            
        
        })
        } 

        export default GetMinisterio