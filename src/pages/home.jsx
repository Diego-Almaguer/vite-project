
import HomeComp from '../components/homeComp'
import {useParams} from 'react-router-dom'


export default function Home() {
  const {profileId} = useParams()
  //console.log(profileId);
  
  return (
    <HomeComp profileId={profileId}/>
  )
}
