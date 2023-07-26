import { Box, Flex, Grid, Image, Select, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TrackCard = ({ Name, food, status, _id, Quantity, Price, Img,email,time}) => {
  let sum = 0;
  let url="https://zomato-kj4c.onrender.com"


  Price.forEach((item) => {
    sum += +item;
  });

  let ok=time[0].split(" ")[1]

let wow=""
  for(let i=0;i<8;i++){
    wow+=ok[i]
  }

 

  return (
    <Flex  justifyContent={"space-between"}  p="2%" boxShadow="#FF9800 -5px 5px, #FFA726 -10px 10px, #FFD54F -15px 15px, #FFE082 -20px 20px, #FFECB3 -25px 25px;">
      <Grid  w="25%" gridTemplateColumns="repeat(3, 1fr)">
        {Img.map((item) => (
          <Box w="100%" margin="auto" mt="2%" key={item}>
            <Image borderRadius="5%" h="100px" w="95%" objectFit="cover" src={item} alt="food" />
          </Box>
        ))}
      </Grid>

     
      <Box  w="19%" textTransform="uppercase" display="flex" alignItems="center" justifyContent="center" fontWeight="700" letterSpacing="1px" fontSize="1rem">
        {status[0]}
      </Box>
      <Box  w="19%" textTransform="uppercase" display="flex" alignItems="center" justifyContent="center" fontWeight="700" letterSpacing="1px" fontSize="1rem" >
        Date: {time[0].split(" ")[0]}
      </Box>
      <Box  w="19%" textTransform="uppercase" display="flex" alignItems="center" justifyContent="center" fontWeight="700" letterSpacing="1px" fontSize="1rem" >
        Time: {wow}
      </Box>

      <Box  w="19%" textTransform="uppercase" display="flex" alignItems="center" justifyContent="center" fontWeight="700" letterSpacing="1px" fontSize="1rem" >
        Total: {sum+100}
      </Box>
      

     
    </Flex>
  );
};

export default TrackCard;
