import React, { useState } from "react";
import styles from "./Signup.module.css";
import axios from "axios";
import { Box, Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const Signup = () => {
  const [data, setdata] = useState({});

  const navigate = useNavigate();

  const handlechange = (e) => {
    const { name, value } = e.target;

    setdata({ ...data, [name]: value });
  };

  let url="https://zomato-kj4c.onrender.com"

  const toast = useToast();

  const handlesubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${url}/Signup`, data)

      .then((res) => {
        console.log(res.data);

        if (res.data == "Successfully Created Account") {
          navigate("/signup");

          toast({
            title: "Success",
            description: res.data,
            status: "success",
            duration: 1000,
            position: "top",
            isClosable: true,
          });
        } else {
          toast({
            title: "Error",
            description: res.data,
            status: "error",
            duration: 1000,
            position: "top",
            isClosable: true,
          });
        }
      });
  };

  const handleSignup = () => {
    navigate("/login");
    toast({
      title: "Success",
      description: "WElCOME TO LOGIN",
      status: "success",
      duration: 1000,
      position: "top",
      isClosable: true,
    });
  };

  return (
    <Box>
      <div>
        <form onSubmit={handlesubmit} className={styles.container}>
          <div className={styles.card}>
            <a className={styles.singup}>Sign Up</a>
            <div className={styles.inputBox1}>
              <input
                name="email"
                type="text"
                required="required"
                onChange={handlechange}
              />
              <span className={styles.user}>Email</span>
            </div>

            <div className={styles.inputBox}>
              <input
                name="name"
                type="text"
                required="required"
                onChange={handlechange}
              />
              <span>Username</span>
            </div>

            <div className={styles.inputBox}>
              <input
                name="password"
                type="password"
                required="required"
                onChange={handlechange}
              />
              <span>Password</span>
            </div>

            <button type="submit" className={styles.enter}>
              Enter
            </button>
          </div>
        </form>
      </div>
      <Button
        _hover={{
          color: "white",
          backgroundColor: "black",
        }}
        onClick={handleSignup}
        letterSpacing={"2px"}
        fontSize={"1rem"}
        fontWeight={"700"}
        font="bold"
        text-transform={"uppercase"}
        bg="#e3e3e3"
        border={"1px solid black"}
        mt="0.5%"
        mb="5%"
        w="20%"
      >
        Login
      </Button>
    </Box>
  );
};

export default Signup;
