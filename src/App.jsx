//import { useState } from 'react'

import './App.css'

import useMinisterio from './hooks/useMinisterio'
import ListOfMinist from './components/listOfMinist'
import MinisterioService from './services/ministerio';

function App() {
  
  const {ministerios}=useMinisterio()
 
  
  return (
    <>
      
      <ListOfMinist ministerios={ministerios}/>
      
    </>
  )
}

export default App
