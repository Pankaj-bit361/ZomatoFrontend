import React from 'react';
import { Routes, Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Admin from '../Pages/Admin';
import Order from '../Pages/Order';
import PrivateRoute from './PrivateRoute';
import { Chatbot } from './Chatbot';
import Checkout from './Checkout';
import Payment from './Payment';
import Track from '../Pages/Track';
import Successfull from '../Pages/Succesfull';


const Allroutes = () => {
  return (
    <Routes>
      
        <Route  path="/" element={ <Home />}/>         
       
        <Route path="/login" element={ <Login />}/>
            
        <Route path="/signup" element={<Signup />}/>

        <Route path="/order" element={<PrivateRoute><Order/></PrivateRoute>}/>
        
        <Route path="/admin" element={<Admin />}/>
        <Route path="/chatbot" element={<Chatbot />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/payment" element={<Payment />}/>
        <Route path="/track" element={<Track />}/>
        <Route path="/successfull" element={<Successfull />}/>
   
    </Routes>
  );
};

export default Allroutes;
