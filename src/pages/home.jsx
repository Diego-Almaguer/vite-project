
import HomeComp from '../components/homeComp'
import {useParams} from 'react-router-dom'

export default function Home() {
  const {userId} = useParams()
  
  
  return (
    <HomeComp userId={userId}/>
  )
}
