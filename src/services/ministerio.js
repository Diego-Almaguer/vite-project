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


        