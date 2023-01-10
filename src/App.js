import React from 'react'
import Singup from './component/singup/Singup'
import Login from './component/login/Login'
import Contact from './component/contactus/ContactUs';
import Navbar from './component/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Buy from './component/buy/Buy';
import Rent from './component/rent/Rent';
import Plot from './component/plot/Plot';
function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Navbar/>}/>
        <Route path='/singup' element={<Singup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/buy' element={<Buy/>}/>
        <Route path='/rent' element={<Rent/>}/>
        <Route path='/plot' element={<Plot/>}/>

        
    
      </Routes>
    </BrowserRouter>
    

    </>
  );
  
}

export default App;