//import { useState } from 'react'

import './App.css'

import useMinisterio from './hooks/useMinisterio'

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
