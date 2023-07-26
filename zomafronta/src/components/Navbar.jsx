import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContentApi } from '../context/ContentApi';
import { Text, useToast } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { Input, InputGroup, InputRightElement, Flex, Box, List, ListItem } from '@chakra-ui/react';

const Navbar = () => {
  const toast = useToast();

  const { logindata, setloginData } = useContext(ContentApi);

  let val = JSON.parse(localStorage.getItem('log'));
  let val2 =JSON.parse(localStorage.getItem("admin"))
  const handlelogout = () => {
    localStorage.removeItem('log');
    localStorage.removeItem("admin")
    setloginData({});

    toast({
      title: 'Success',
      description: 'Logout Successfully',
      status: 'error',
      duration: 1000,
      position: 'top',
      isClosable: true,
    });
  };

  return (
    <Flex bg="#ed7f1a" p="1%" justifyContent="space-between" alignItems="center">
      <Link to="/" textDecoration="none">
        <Text as="h1" fontWeight={"700"} fontSize="1.8rem" color="#fff">
          Zusty Zomato
        </Text>
      </Link>
      <InputGroup w="250px">
        <Input type="text" borderRadius="9999px" bg="#fff" fontSize="16px" placeholder="Search" />
        <InputRightElement h="100%" children={<FaSearch color="#999" />} />
      </InputGroup>
      <List display="flex" justifyContent="center" alignItems="center" margin={0} padding={0}>
        {val && val[1].name ? (
          <ListItem margin="0 10px">
            <Link to="/" >
            <Text textDecoration="none" color="#fff" fontWeight="bold"> {val[1].name}</Text>
             
            </Link>
          </ListItem>
        ) : null}

        {val2 && val2[1] ? (
          <ListItem margin="0 10px">
            <Link to="/" >
            <Text textDecoration="none" color="#fff" fontWeight="bold"> {val2[1]}</Text>
             
            </Link>
          </ListItem>
        ) : null}

        <ListItem margin="0 10px">
          <Link to="/order" textDecoration="none" color="#fff" fontWeight="bold">
          <Text textDecoration="none" color="#fff" fontWeight="bold"> Order</Text>
          </Link>
        </ListItem>

        {val && val[1]?<ListItem margin="0 10px">
          <Link to="/track" >
          <Text textDecoration="none" color="#fff" fontWeight="bold">Track Order</Text>
          </Link>
        </ListItem>:""}

        {val || val2 ? (
          <ListItem margin="0 10px">
            <Text
              textDecoration="none"
              color="#fff"
              fontWeight="bold"
              cursor="pointer"
              onClick={handlelogout}
            >
              Logout
            </Text>
          </ListItem>
        ) : (
          <ListItem margin="0 10px">
            <Link to="/login" >
            <Text textDecoration="none" color="#fff" fontWeight="bold"> Login</Text>
            </Link>
          </ListItem>
        )}
        {val2 && val2[1]?<ListItem margin="0 10px">
          <Link to="/admin" >
          <Text textDecoration="none" color="#fff" fontWeight="bold">Admin</Text>
          </Link>
        </ListItem>:""}
        
      </List>
    </Flex>
  );
};

export default Navbar;
