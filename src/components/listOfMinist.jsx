import MinisterioComp from "./ministerioComp";

export default function ListOfMinist({ministerios}) {
    return ministerios.map(item=><MinisterioComp key={item.id} nombre={item.nombre}/>)
}