import logo from './logo.svg';
import './App.css';
import Loader from './components/Loader';
import { useEffect, useState } from 'react';
import Signup from './Pages/Signup';
import AllData from './Pages/AllData';
import { Chatbot } from './components/Chatbot';





function App() {
let id
const [state,setstate]=useState(true)
const [count,setcount]=useState(0)
  useEffect(()=>{

id=setInterval(()=>{
  setcount((prev)=>{
   
   if(prev==3){
    clearInterval(id)
    setstate(false)
   }
return prev+1
  
  })
},1000)

return ()=>{
  clearInterval(id)
}

  },[count])

  return (
    <div className="App">
     {state?<Loader/>:
     <AllData/>
    
     }
    
    </div>
  );
}

export default App;
