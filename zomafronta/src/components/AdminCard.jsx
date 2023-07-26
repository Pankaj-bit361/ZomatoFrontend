import { Box, Flex, Grid, Image, Select, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AdminCard = ({ Name, food, status, _id, Quantity, Price, Img, setstate,state,email,time}) => {
  let sum = 0;
  let url="https://zomato-kj4c.onrender.com"
  const [status1, setStatus] = useState(status);

  Price.forEach((item) => {
    sum += +item;
  });

  let ok=time[0].split(" ")[1]

let wow=""
  for(let i=0;i<8;i++){
    wow+=ok[i]
  }

  const handleChange = async (e) => {

    setStatus(e.target.value);
console.log(e.target.value)

    try {
      const response = await axios.patch(`${url}/updateOrder/${time[0]}/${e.target.value}`);
      const data = response.data;
      setstate(!state);
     
    } catch (error) {
      
      console.error(error);
    }
  };

  return (
    <Flex border="5px solid #ed7f1a" p="2%" boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;">
      <Grid w="20%" gridTemplateColumns="repeat(3, 1fr)">
        {Img.map((item) => (
          <Box w="100%" margin="auto" mt="2%" key={item}>
            <Image borderRadius="5%" h="100px" w="95%" objectFit="cover" src={item} alt="food" />
          </Box>
        ))}
      </Grid>

      <Box textAlign="center" display="flex" alignItems="center" justifyContent="center" textTransform="uppercase" letterSpacing="1px" fontWeight="700" fontSize="1rem" w="15%">
        <Text>{Name[0]}</Text>
      </Box>
      <Box textTransform="uppercase" display="flex" alignItems="center" justifyContent="center" fontWeight="700" letterSpacing="1px" fontSize="1rem" w="15%">
        {status[0]}
      </Box>
      <Box textTransform="uppercase" display="flex" alignItems="center" justifyContent="center" fontWeight="700" letterSpacing="1px" fontSize="1rem" w="15%">
        Date: {time[0].split(" ")[0]}
      </Box>
      <Box textTransform="uppercase" display="flex" alignItems="center" justifyContent="center" fontWeight="700" letterSpacing="1px" fontSize="1rem" w="15%">
        Time: {wow}
      </Box>

      <Box textTransform="uppercase" display="flex" alignItems="center" justifyContent="center" fontWeight="700" letterSpacing="1px" fontSize="1rem" w="15%">
        Total: {sum}
      </Box>
      

      <Box w="15%"  display="flex" alignItems="center" justifyContent="center" fontWeight="700" letterSpacing="1px" fontSize="1.2rem">
        <Select bg={"#ed7f1a"}  color="black" fontWeight="700" letterSpacing="1px" border={"2px solid #ed7f1a"} value={status1} onChange={handleChange}>
          <option  value="Received">Received</option>
          <option value="Preparing">Preparing</option>
          <option value="Ready for Pickup">Ready for Pickup</option>
          <option value="Delivered">Delivered</option>
        </Select>
      </Box>
    </Flex>
  );
};

export default AdminCard;
