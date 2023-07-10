import React from 'react';
import { Routes, Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Admin from '../Pages/Admin';
import Order from '../Pages/Order';
import PrivateRoute from './PrivateRoute';
import { Chatbot } from './Chatbot';


const Allroutes = () => {
  return (
    <Routes>
      
        <Route  path="/" element={ <Home />}/>         
       
        <Route path="/login" element={ <Login />}/>
            
        <Route path="/signup" element={<Signup />}/>

        <Route path="/order" element={<PrivateRoute><Order/></PrivateRoute>}/>
        
        <Route path="/admin" element={<Admin />}/>
        <Route path="/chatbot" element={<Chatbot />}/>
   
    </Routes>
  );
};

export default Allroutes;
