import { useEffect, useRef, useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Box,
  Heading,
  Text,
  Card,
  Grid,
  Flex,
  IconButton, 
  Image,
} from '@chakra-ui/react';
import axios from 'axios';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
const init={
  Img:"",
  Name:"",
  Price:0,
  Quantity:0
}
const init2={
  _id:"",
  Img:"",
  Name:"",
  Price:0,
  Quantity:0
}


function InitialFocus() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [data,setdata]=useState(init)
  const [data1,setdata1]=useState(init2)
  const initialRef =useRef(null);



  const [menuItems, setMenuItems] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get('http://127.0.0.1:8080/menu');

      setMenuItems(response.data);
    } catch (error) {
      console.error('Error fetching menu:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

const handleChange=(e)=>{
const {name,value}=e.target
setdata({...data,[name]:value})

}


const handlesubmit=(e)=>{
e.preventDefault()

axios.post(`http://localhost:8080/addDish`,data)
.then((res)=>{
  fetchData()
})

setdata(init)
}




const handleChange1 = (e) => {
  const { name, value } = e.target;
  setdata1({...data1,[name]:value})
};

const handlesubmit1 = (e, id) => {
  e.preventDefault();

  axios
    .patch(`http://localhost:8080/updateDish/${data1._id}`, data1)
    .then((res) => {
      fetchData()
    })
    .catch((error) => {
      console.error('Error updating dish:', error);
    });
};


  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModalEdit = (item) => {
    setIsOpenEdit(true);
    setdata1({
      _id:item._id,
      Img: item.Img,
      Name: item.Name,
      Price: item.Price,
      Quantity: item.Quantity
    });
  };
  
const handleDelete=(id)=>{
axios.delete(`http://localhost:8080/delete/${id}`)
.then((res)=>{
  fetchData()
})
}

  const handleCloseModalEdit = () => {
    setIsOpenEdit(false);
  };

  return (
     <Box>
      <Button onClick={handleOpenModal}>Add a new Dish</Button>

<Modal
  initialFocusRef={initialRef}
  isOpen={isOpen}
  onClose={handleCloseModal}
  bg="grey"
>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Create your account</ModalHeader>
    <ModalCloseButton />
    <ModalBody pb={6}>
      <FormControl mt={4}>
        <FormLabel>Product Image</FormLabel>
        <Input name="Img" value={data.Img} onChange={handleChange} />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Product Name</FormLabel>
        <Input name="Name" value={data.Name} onChange={handleChange} />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Product Price</FormLabel>
        <Input name="Price" value={data.Price} onChange={handleChange} />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Product Quantity</FormLabel>
        <Input
          name="Quantity"
          value={data.Quantity}
          onChange={handleChange}
        />
      </FormControl>
    </ModalBody>

    <ModalFooter>
      <Button colorScheme="blue" mr={3} type="submit" onClick={handlesubmit}>
        Save
      </Button>
      <Button onClick={handleCloseModal}>Cancel</Button>
    </ModalFooter>
  </ModalContent>
</Modal>

<Grid templateColumns="repeat(1, 1fr)" gap="1rem">
      {menuItems.map((item) => (
        <Card key={item._id} width="100%">
          <Flex alignItems="center" justifyContent="space-around">
            <Box w="18%" display="flex">
              <Image
                
                borderRadius="5%"
                src={item.Img}
                w="100px"
                h="100px"
                objectFit="cover"
                mr="3rem"
              />
            </Box>
            <Box w="18%">
              <Heading as="h2" size="md" mb="0.5rem">
                {item.Name}
              </Heading>
             
            </Box>
            <Text fontWeight="500" mb="0.5rem">
                Price: {item.Price}
              </Text>
              <Text fontWeight="500">Quantity: {item.Quantity}</Text>
            <Flex w="18%" justifyContent="flex-end">
              <IconButton
                colorScheme="red"
                aria-label="Delete"
                icon={<DeleteIcon />}
                onClick={() => handleDelete(item._id)}
                mr="0.5rem"
              />
              <IconButton
                colorScheme="blue"
                aria-label="Edit"
                onClick={() => handleOpenModalEdit(item)}
                icon={<EditIcon />}
              />
            </Flex>
          </Flex>

          <Modal
            initialFocusRef={initialRef}
            isOpen={isOpenEdit}
            onClose={handleCloseModalEdit}
            bg="grey"
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Edit Item</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl mt={4}>
                  <FormLabel>Product Image</FormLabel>
                  <Input
                    name="Img"
                    value={data1.Img}
                    onChange={handleChange1}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Product Name</FormLabel>
                  <Input
                    name="Name"
                    value={data1.Name}
                    onChange={handleChange1}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Product Price</FormLabel>
                  <Input
                    name="Price"
                    value={data1.Price}
                    onChange={handleChange1}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Product Quantity</FormLabel>
                  <Input
                    name="Quantity"
                    value={data1.Quantity}
                    onChange={handleChange1}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  type="submit"
                  onClick={(e) => handlesubmit1(e,item._id)}
                >
                  Save
                </Button>
                <Button onClick={handleCloseModalEdit}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Card>
      ))}
    </Grid>
    </Box>
  );
}

export default InitialFocus;
