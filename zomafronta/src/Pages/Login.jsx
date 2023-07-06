import React, { useState } from 'react';
import styles from './Login.module.css';
import axios from 'axios';

const Login = () => {
const [email,setemail]=useState("")
const [password,setpassword]=useState("")

const handleClick=()=>{
let ob={email,password}
axios.post(`http://127.0.0.1:8080/login`,ob)
.then((res)=>{
console.log(res.data)
alert(`${res.data[0]}`)
})

}

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <a className={styles.login}>Log in</a>
        <div className={styles.inputBox}>
          <input type="text" required="required" onChange={(e)=>setemail(e.target.value)} />
          <span className={styles.user}>Email</span>
        </div>

        <div className={styles.inputBox}>
          <input type="password" required="required" onChange={(e)=>setpassword(e.target.value)} />
          <span>Password</span>
        </div>

        <button onClick={handleClick} className={styles.enter}>Enter</button>
      </div>
    </div>
  );
};

export default Login;
