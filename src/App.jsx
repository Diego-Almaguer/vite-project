//import { useState } from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import './App.css'
import CreateUser from './pages/createUser';
//import LoginComp from './components/loginComp';
import Home  from './pages/home';
import Login from './pages/login';
import NavigationControls from './components/navigationButton';

function App() {
  
  
 
  
  return (
    <>
    <NavigationControls/>
    <BrowserRouter>
    <Routes>
      
      <Route path='/:id' element={<Home />} />
      <Route path='/' element={<Login />} />
      <Route path='/createUser' element={<CreateUser />} />
      
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
