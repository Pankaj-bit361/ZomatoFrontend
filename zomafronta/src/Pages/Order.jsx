import { Box, Card, Flex, Grid, Heading, IconButton, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { AiOutlineMinus } from 'react-icons/ai';
import { useState } from 'react';
import CardOrder from '../components/Card';
import AdminCard from '../components/AdminCard';
const Order = () => {
const [data,setdata]=useState([])
const [orderdata,setorderdata]=useState([])
let val =JSON.parse(localStorage.getItem("log"))
let val2=JSON.parse(localStorage.getItem("admin"))
const [state,setstate]=useState(false)

let url="https://zomato-kj4c.onrender.com"



const getdata=()=>{
  let value=""
if(val){
  value=`allorder/${val[1].email}`
}else if(val2){
value="all"
}else{
  value="allorder/please"
}
  axios.get(`${url}/${value}`)
  .then((res)=>{
    setdata(res.data)
    console.log(res.data)
    let newdata = res.data.reduce((prev, item) => {
      if (prev[item.email]) {
        prev[item.email].Name.push(item.Name);
        prev[item.email]._id.push(item._id);
        prev[item.email].Img.push(item.Img);
        prev[item.email].food.push(item.food);
        prev[item.email].Quantity.push(item.Quantity)
        prev[item.email].Price.push(item.Price)
        prev[item.email].status.push(item.status)
        prev[item.email].email.push(item.email)
             } else {
        prev[item.email] = {
          email:[item.email],
          _id:[item._id],
          Name: [item.Name],
          Img: [item.Img],
          food: [item.food],
          Quantity:[item.Quantity],
          Price:[item.Price],
          status:[item.status]
        };
      }
      return prev;
    }, {});
    let ok=[]
   
      for (let key in newdata){
        ok.push(newdata[key])
      }
 console.log(ok)
    setorderdata(ok)
    
  })
 }




useEffect(()=>{
  getdata()
console.log(data)

  },[state])
  



  return (
   
    <div>
    
{val2?
<Grid templateColumns="repeat(1, 1fr)" mt="2%" mb="2%" gap="1rem">
      {orderdata?.map((item) => (
        <Card key={item._id} width="100%">
          <AdminCard {...item} setstate={setstate} state={state}/>
      
        </Card>
      ))}
    </Grid>:""}


{!val2 && data.length>0?<Grid templateColumns="repeat(1, 1fr)" gap="1rem">
      {data?.map((item) => (
        <Card key={item._id} width="100%">
          <CardOrder {...item} setstate={setstate} state={state}/>
      
        </Card>
      ))}
    </Grid>:""}
{!data.length>0?<Flex >
      <Image margin={"auto"} w="50%" src="https://i.pinimg.com/originals/ae/bc/8c/aebc8c60e30c83f3ab34c978733dab26.png"/>
    </Flex>:""}

    </div>
  )
}

export default Order