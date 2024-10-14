//import { useState } from 'react'

import './App.css'
import LoginComp from './components/loginComp';

import useMinisterio from './hooks/useMinisterio'

import Example  from './pages/home';

function App() {
  
  //const {ministerios}=useMinisterio()
 
  
  return (
    <>
      
      <Example/>
      <LoginComp/>
      
    </>
  )
}

export default App
