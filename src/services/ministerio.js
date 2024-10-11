export default function MinisterioService(){

return fetch("http://localhost:8080/ministeriocontroller/ministerio")

.then(res=>res.json())
.then(res=> {return console.log(res.data)})



} 