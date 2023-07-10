import React, { useContext, useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { ContentApi } from "../context/ContentApi";
import { useNavigate } from "react-router";
import { Box, Button, useToast } from "@chakra-ui/react";

const Login = () => {
  const { setloginData } = useContext(ContentApi);
  let url="https://zomato-kj4c.onrender.com"


const toast=useToast()
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
 const navigate=useNavigate()
  const handleClick = () => {
    let ob = { email, password };
    axios.post(`${url}/login`, ob).then((res) => {
      setloginData(res.data);

    

      if (res.data[0] == "Login Successful") {
        localStorage.setItem("log", JSON.stringify(res.data));
        navigate("/")
        toast({
          title: 'Success',
          description: res.data[0],
          status: 'success',
          duration: 1000,
          position:"top",
          isClosable: true,
        })
      }
      else if(res.data[0]=="Welcome Admin"){
        localStorage.setItem("admin", JSON.stringify(res.data));
        navigate("/")
        toast({
          title: 'Admin',
          description: res.data[0],
          status: 'info',
          duration: 1000,
          position:"top",
          isClosable: true,
        })
      }
      
      else {
        toast({
          title: 'Error',
          description: res.data[0],
          status: 'error',
          duration: 1000,
          position:"top",
          isClosable: true,
        })
      }
    });
  };

const handleSignup=()=>{
  navigate("/signup")
  toast({
    title: 'Success',
    description: "WElCOME TO SIGNUP",
    status: 'success',
    duration: 1000,
    position:"top",
    isClosable: true,
  })

}

  return (
    <Box>
   
    <div className={styles.container}>
    
      <div className={styles.card}>
        <a className={styles.login}>Log in</a>
        <div className={styles.inputBox}>
          <input
            type="text"
            required="required"
            onChange={(e) => setemail(e.target.value)}
          />
          <span className={styles.user}>Email</span>
        </div>

        <div className={styles.inputBox}>
          <input
            type="password"
            required="required"
            onChange={(e) => setpassword(e.target.value)}
          />
          <span>Password</span>
        </div>

        <button onClick={handleClick} className={styles.enter}>
          Enter
        </button>
      </div>
    </div>
    <Button _hover={{
      color:"white",
      backgroundColor:"black"
    }} onClick={handleSignup} letterSpacing={"2px"} fontSize={"1rem"} fontWeight={"700"} font="bold" text-transform={"uppercase"} bg="#e3e3e3" border={"1px solid black"} mt="0.5%" mb="5%" w="20%">SIGN UP</Button>
    </Box>
  );
};

export default Login;
