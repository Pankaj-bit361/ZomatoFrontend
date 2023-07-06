import React from 'react';
import { Routes, Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Admin from '../Pages/Admin';
import Order from '../Pages/Order';


const Allroutes = () => {
  return (
    <Routes>
      
        <Route  path="/" element={ <Home />}/>         
       
        <Route path="/login" element={ <Login />}/>
            
        <Route path="/signup" element={<Signup />}/>

        <Route path="/order" element={<Order/>}/>
        
        <Route path="/admin" element={<Admin />}/>
   
    </Routes>
  );
};

export default Allroutes;
