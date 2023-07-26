import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Successfull = () => {
  return (
    <Box
      textAlign="center"
      animation="fade-in 1s ease-in-out"
      p={6}
      bg="white"
      boxShadow="lg"
      borderRadius="md"
    >
      <Text fontSize="2rem" fontWeight="bold" mb={4}>
        Your order has been placed successfully!
      </Text>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Image
          src="https://media1.giphy.com/media/WPtuvmZszxytwCKDXI/200.gif"
          alt="Order Success GIF"
          maxW="100%"
          animation="zoom-in 1s ease-in-out"
        />
      </Box>
      <Text mt={4} fontSize="1.2rem" color="gray.500">
        Thank you for choosing our services. Your order will be processed and
        delivered shortly.
      </Text>
    </Box>
  );
};

export default Successfull;
