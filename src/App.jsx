//import { useState } from 'react'

import './App.css'

import useMinisterio from './hooks/useMinisterio'
import ListOfMinist from './components/listOfMinist'
import MinisterioService from './services/ministerio';
import Example  from './pages/home.jsx';

function App() {
  
  const {ministerios}=useMinisterio()
 
  
  return (
    <>
      
      <Example/>
      
    </>
  )
}

export default App
