
import React, { createContext, useState } from 'react'

export const ContentApi=createContext()

export const ContentApiProvider = ({children}) => {
let val=JSON.parse(localStorage.getItem("log"))||{}
console.log(val,"line 8")
const [logindata,setloginData]=useState(val[1])


return <ContentApi.Provider value={{setloginData,logindata}}>
{children}
</ContentApi.Provider>
}




