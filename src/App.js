import React from 'react'
import AddProduct from './component/addproduct/AddressForm'
import Singup from './component/singup/Singup'
import Login from './component/login/Login'
import Contact from './component/contactus/ContactUs';
import Navbar from './component/navbar/Navbar'
import RecentlyBuy from './component/Recentlybuy/RecentlyBuy'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './component/addproduct/Checkout';
import Profile from './component/profile/Profile';
function App() {
  return(
    <>
    {/* <AddProduct/> */}

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Navbar/>}/>
        <Route path='/singup' element={<Singup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        

        
    
      </Routes>
    </BrowserRouter>
    

    </>
  );
  
}

export default App;