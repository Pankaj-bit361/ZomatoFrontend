import React, { useState } from 'react';
import styles from './Signup.module.css';
import axios from 'axios';

const Signup = () => {

const [data,setdata]=useState({})

const handlechange=(e)=>{
  const {name,value}=e.target
setdata({...data,[name]:value})
}

const handlesubmit=(e)=>{
  e.preventDefault()
  axios.post(`http://127.0.0.1:8080/Signup`,data)
  .then((res)=>{
    console.log(res.data)
    alert(res.data)
  })
}

  return (
    <div>
      <form onSubmit={handlesubmit} className={styles.container}>
        <div className={styles.card}>
          <a className={styles.signup}>Sign Up</a>
          <div className={styles.inputBox1}>
            <input name="email" type="text" required="required"  onChange={handlechange} />
            <span className={styles.user}>Email</span>
          </div>

          <div className={styles.inputBox}>
            <input name="name" type="text" required="required"  onChange={handlechange} />
            <span>Username</span>
          </div>

          <div className={styles.inputBox}>
            <input name="password" type="password" required="required" onChange={handlechange} />
            <span>Password</span>
          </div>

          <button type="submit" className={styles.enter}>Enter</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
