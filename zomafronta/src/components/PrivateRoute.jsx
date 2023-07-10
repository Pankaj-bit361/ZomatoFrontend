import React from 'react'
import { Navigate } from 'react-router'

const PrivateRoute = ({children}) => {
 
    let val =JSON.parse(localStorage.getItem("log"))
    let val2 =JSON.parse(localStorage.getItem("admin"))
  
    if(!val && !val2){
        return <Navigate to="/login"/>
    }
 return children

}

export default PrivateRoute