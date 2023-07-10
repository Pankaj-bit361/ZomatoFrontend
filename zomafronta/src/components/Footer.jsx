import React from 'react';
import { Box, Flex, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="#ed7f1a" py={8}>
      <Flex justifyContent="center">
        <Box w="33%" px={4}>
          <Heading color="#fff" fontWeight="bold" mb={4} fontSize="xl">
            About Us
          </Heading>
          <Text color="#fff" fontSize="md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Box>
        <Box w="33%" px={4}>
          <Heading color="#fff" fontWeight="bold" mb={4} fontSize="xl">
            Quick Links
          </Heading>
          <UnorderedList listStyleType="none" padding={0}>
            <ListItem>
              <a href="/" style={{ color: '#fff', textDecoration: 'none' }}>
                Home
              </a>
            </ListItem>
            <ListItem>
              <a href="/about" style={{ color: '#fff', textDecoration: 'none' }}>
                About
              </a>
            </ListItem>
            <ListItem>
              <a href="/menu" style={{ color: '#fff', textDecoration: 'none' }}>
                Menu
              </a>
            </ListItem>
            <ListItem>
              <a href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>
                Contact
              </a>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box w="33%" px={4}>
          <Heading color="#fff" fontWeight="bold" mb={4} fontSize="xl">
            Contact Us
          </Heading>
          <Text color="#fff" fontSize="md">
            123 Street, City, Country
          </Text>
          <Text color="#fff" fontSize="md">
            Phone: +1 123-456-7890
          </Text>
          <Text color="#fff" fontSize="md">
            Email: info@example.com
          </Text>
        </Box>
      </Flex>
      <Box textAlign="center" mt={8}>
        <Text color="#fff" fontSize="sm" fontWeight="bold">
          &copy; 2023 Your Restaurant. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
