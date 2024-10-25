import { useState } from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import './App.css'
import CreateUser from './pages/createUser';
//import LoginComp from './components/loginComp';
import Home  from './pages/home';
import Login from './pages/login';
import NavigationControls from './components/navigationButton';
import CreateInspectores from './components/createInspectores';
import CreateEmpresas from './components/createEmpresas';
import CreateReport from './components/createReport';



function App() {
  
 
 
  
  return (
    <>
   
    
    <BrowserRouter>
    <Routes>
      
      <Route path='/:userId' element={<Home />} />
      <Route path='/' element={<Login />} />
      <Route path='/createUser' element={<CreateUser />} />
      <Route path='/inspectores/:userId' element={<CreateInspectores />} />
      <Route path='/empresas/:userId' element={<CreateEmpresas />} />
      <Route path='/reports/:userId' element={<CreateReport />} />
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
