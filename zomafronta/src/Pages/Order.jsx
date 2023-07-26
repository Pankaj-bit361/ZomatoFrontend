import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import axios from "axios";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
import CardOrder from "../components/Card";
import AdminCard from "../components/AdminCard";
import { useNavigate } from "react-router";
import Loader2 from "../components/Loader2";
const Order = () => {



const navigate=useNavigate()

  const [data, setdata] = useState([]);
  const [orderdata, setorderdata] = useState([]);
  const [loading,setLoading]=useState(false)

  let val = JSON.parse(localStorage.getItem("log"));
  let val2 = JSON.parse(localStorage.getItem("admin"));
  const [state, setstate] = useState(false);

  let url = "https://zomato-kj4c.onrender.com";

  const getdata = () => {
    setLoading(true)
    let value = "";
    if (val) {
      value = `allorder/${val[1].email}`;
    } else if (val2) {
      value = "getOrderedData";
    } else {
      value = "allorder/please";
    }
    axios.get(`${url}/${value}`).then((res) => {
      setdata(res.data);
     
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
      console.log(ok);
      setorderdata(ok);
      setLoading(false)
    });
  };

  useEffect(() => {
    getdata();
  }, [state]);


if(loading){
return <Box  mt="5%" mb="5%"><Loader2/></Box>
}


  return (


    <Box >

    
      {val2 ? (
        <Grid templateColumns="repeat(1, 1fr)" mt="2%" mb="2%" gap="1rem">
          {orderdata?.map((item) => (
            <Card key={item._id} width="100%">
              <AdminCard {...item} setstate={setstate} state={state} />
            </Card>
          ))}
        </Grid>
      ) : (
        ""
      )}

      {!val2 && data.length > 0 ? (
        <Grid templateColumns="repeat(1, 1fr)" gap="1rem">
          {data?.map((item) => (
            <Card key={item._id} width="100%">
              <CardOrder {...item} setstate={setstate} state={state} />
            </Card>
          ))}
        </Grid>
      ) : (
        ""
      )}
      {!data.length > 0 ? (
        <Flex>
          <Image
            margin={"auto"}
            w="50%"
            src="https://i.pinimg.com/originals/ae/bc/8c/aebc8c60e30c83f3ab34c978733dab26.png"
          />
        </Flex>
      ) : (
        ""
      )}
      {data.length>0 && val?<Button onClick={()=>navigate("/checkout")} mt="2%" mb="2%" colorScheme="green">Proceed To chekout</Button>:""}
    </Box>
  );
};

export default Order;
