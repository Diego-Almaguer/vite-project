
import HomeComp from '../components/homeComp'
import {useParams} from 'react-router-dom'


export default function Home() {
  const {userId} = useParams()
  //console.log(profileId);
  
  return (
    <HomeComp userId={userId}/>
  )
}
