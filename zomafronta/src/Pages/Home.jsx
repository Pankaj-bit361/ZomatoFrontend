import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.css';
import { Heading, useToast } from '@chakra-ui/react';
import bot from "../Assets/chatbot.png"
import axios from 'axios';
import { useNavigate } from 'react-router';

const HomePage = () => {
const navigate=useNavigate()

  let url="https://zomato-kj4c.onrender.com"

  const [menuItems, setMenuItems] = useState([]);
  const [loading,setloading]=useState(false)
  const toast = useToast()
  useEffect(() => {
    setloading(true)
    fetch(`${url}/menu`)
      .then(response => response.json())
      .then(data => setMenuItems(data))
      .catch(error => console.log(error));
  }, []);



  let val =JSON.parse(localStorage.getItem("log"))
 const handleBook=(food)=>{
  let ob={
    "email":val[1].email,
    "Name":val[1].name,
    "food":food
  }

axios.post(`${url}/order`,ob)
.then((res)=>{
  console.log(res)
  if(res.data==="Order Created Successfully"){
    toast({
      title: 'Success',
      description: res.data,
      status: 'success',
      duration: 1000,
      position:"top",
      isClosable: true,
    })
  }else{
    toast({
      title: 'Info!',
      description: res.data,
      status: 'info',
      duration: 1000,
      
      position:"top",
      isClosable: true,
    })
  }
})

 }



  return (
    <div  className={styles.container}>
      <Heading>Menu</Heading>
      <div className={styles.cardContainer}>
        {menuItems.map(item => (
          <div key={item._id} className={styles.card}>
            <img src={item.Img} alt="food" className={styles.cardImage} />
            <h2 className={styles.cardTitle}>{item.Name}</h2>
            <p className={styles.cardDescription}>Quantity: {item.Quantity}</p>
            <p className={styles.cardDescription}>Price: {item.Price}</p>
            <button className={styles.cardButton} onClick={()=>handleBook(item.Name)}>Book Now</button>
          </div>
        ))}
      </div>
      <div onClick={() => navigate("/chatbot")}>
        <img style={{ float: 'right', width: "87px", fontSize: "70px", marginRight: "-18%", position: "fixed", top: "70%", left: "93.3%" }} src={bot} />
      </div>
    </div>
  );
};

export default HomePage;
