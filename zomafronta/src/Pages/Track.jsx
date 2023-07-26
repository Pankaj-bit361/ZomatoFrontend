import { Box, Card, Grid } from '@chakra-ui/react';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AdminCard from '../components/AdminCard';
import TrackCard from '../components/TrackCard';

const Track = () => {

    const [state, setstate] = useState(false);
    const [orderdata, setorderdata] = useState([]);

    let url="https://zomato-kj4c.onrender.com"

    let val = JSON.parse(localStorage.getItem('log'));
const getdata=()=>{
    axios.get(`${url}/getOrderedData`)
    .then((res)=>{
       
        let newdata = res.data.reduce((prev, item) => {
            if (prev[item.time]) {
              prev[item.time].Name.push(item.Name);
              prev[item.time]._id.push(item._id);
              prev[item.time].Img.push(item.Img);
              prev[item.time].food.push(item.food);
              prev[item.time].Quantity.push(item.Quantity);
              prev[item.time].Price.push(item.Price);
              prev[item.time].status.push(item.status);
              prev[item.time].email.push(item.email);
              prev[item.time].time.push(item.time);
            } else {
              prev[item.time] = {
                time:[item.time],
                email: [item.email],
                _id: [item._id],
                Name: [item.Name],
                Img: [item.Img],
                food: [item.food],
                Quantity: [item.Quantity],
                Price: [item.Price],
                status: [item.status],
              };
            }
            return prev;
          }, {});
          let ok = [];
    
          for (let key in newdata) {
            ok.push(newdata[key]);
          }
         
        let newok=ok.filter((item)=>item["email"][0]==val[1].email)

          setorderdata(newok)
    })
}


useEffect(()=>{
getdata()
},[])


  return (
    <Box>
    <Grid templateColumns="repeat(1, 1fr)" mt="2%" mb="2%" gap="1rem">
    {orderdata?.map((item) => (
      <Card key={item._id} width="100%">
        <TrackCard {...item} setstate={setstate} state={state} />
      </Card>
    ))}
  </Grid>
  </Box>
  )
}

export default Track