//import { useState } from 'react'

import './App.css'

import useMinisterio from './hooks/useMinisterio'
import ListOfMinist from './components/listOfMinist'
import MinisterioService from './services/ministerio';
import { Component } from './pages/home';

function App() {
  
  const {ministerios}=useMinisterio()
 
  
  return (
    <>
      
      <Comment/>
      
    </>
  )
}

export default App
