import React from 'react'
import Singup from './component/singup/Singup'
import Login from './component/login/Login'
import Contact from './component/contactus/ContactUs';
import Navbar from './component/navbar/Navbar'
import RecentlyBuy from './component/Recentlybuy/RecentlyBuy'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Navbar/>}/>
        <Route path='/singup' element={<Singup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>

        
    
      </Routes>
    </BrowserRouter>
    

    </>
  );
  
}

export default App;