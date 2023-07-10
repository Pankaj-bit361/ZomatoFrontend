

import { Box, Card, Flex, Grid, Heading, IconButton, Image, Select, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { AiOutlineMinus } from 'react-icons/ai';

const CardOrder = ({Img,food,Price,Name,status,Quantity,_id,setstate,state}) => {
let url="https://zomato-kj4c.onrender.com"
const [quan,setquan]=useState(Quantity)
const [status1,setstatus]=useState(status)


const toast =useToast()
let val2=JSON.parse(localStorage.getItem("admin"))

const IncreaseQuantity=()=>{

  setquan(prev=>prev+1)
  console.log(quan)
axios.patch(`${url}/updateOrderQuan/${_id}`)
.then((res)=>{
  console.log(res.data)
  setstate(!state)
})

}



const DecreaseQuantity=()=>{

setquan(prev=>prev-1)

axios.patch(`${url}/updateOrderQuannegative/${_id}`)
.then((res)=>{
  console.log(res.data)
  setstate(!state)
})

}

const handledelete=()=>{

  axios.delete(`${url}/deleteOrder/${_id}/${food}`)
  .then((res)=>{
    setstate(!state)
    toast({
      title: 'Success',
      description: "Dish Removed",
      status: 'success',
      duration: 1000,
      position:"top",
      isClosable: true,
    })
  })
}

const handlechange = async (e) => {
  setstatus((prev) => prev = e.target.value);

  try {
    const response = await axios.patch(`${url}/updateOrder/${_id}/${e.target.value}`);
    const data = response.data;
    setstate(!state)
    // Handle the response data as needed
  } catch (error) {
    // Handle error
    console.error(error);
  }
};

  return (
    <Flex alignItems="center" justifyContent="space-around">
    <Box  margin={"auto"} w="15%" display="flex">
      <Image
        
        borderRadius="5%"
        src={Img}
        w="100px"
        h="100px"
        objectFit="cover"
       
      />
    </Box>
    <Box   margin={"auto"} w="15%">
      <Heading as="h2" size="md" mb="0.5rem">
        {food}
      </Heading>
     
    </Box>
    <Text   textAlign={"center"}  w="15%" fontSize={"1.1rem"} fontWeight="700" mb="0.5rem">
        Price: {Price}
      </Text>
      <Text w="15%" fontSize={"1.1rem"} fontWeight="700" mb="0.5rem">
        {status}
      </Text>

      {!val2?
        <Flex  margin={"auto"}  w="15%" gap="2%">
      <IconButton
       colorScheme="red"
       onClick={DecreaseQuantity}
        icon={<AiOutlineMinus/>}
      />
      <Text  margin={"auto"} fontSize={"1.2rem"} fontWeight="500"> {quan}</Text>
      <IconButton
       colorScheme="green"
       onClick={IncreaseQuantity}
        icon={<AddIcon/>}
      />
      </Flex>:
      <Select w="15%" value={status1} onChange={handlechange}>
        {/* <option value="">Change Status</option> */}
        <option value="Recieved" >Recieved</option>
        <option value="Preparing">Preparing</option>
        <option value="Ready for Pickup">Ready for Pickup</option>
        <option value="Delivered">Delivered</option>
      </Select>
      }
   
     
    <Flex  w="15%" margin={"auto"}  justifyContent="flex-end">
      <IconButton
        colorScheme="red"
        aria-label="Delete"
       onClick={handledelete}
        icon={<DeleteIcon />}
       
        mr="0.5rem"
      />
     
    </Flex>
  </Flex>
  );
};

export default CardOrder;
