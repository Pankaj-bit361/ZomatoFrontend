import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.css';
import { Heading } from '@chakra-ui/react';

const HomePage = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8080/menu')
      .then(response => response.json())
      .then(data => setMenuItems(data))
      .catch(error => console.log(error));
  }, []);

 const handleBook=()=>{
  
 }
  return (
    <div  className={styles.container}>
      <Heading>Menu</Heading>
      <div className={styles.cardContainer}>
        {menuItems.map(item => (
          <div key={item._ID} className={styles.card}>
            <img src={item.Img} alt="food" className={styles.cardImage} />
            <h2 className={styles.cardTitle}>{item.Name}</h2>
            <p className={styles.cardDescription}>Quantity: {item.Quantity}</p>
            <p className={styles.cardDescription}>Price: {item.Price}</p>
            <button className={styles.cardButton} onClick={handleBook}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
