import React from 'react';
import { Box, Flex, Heading, Link, Spacer } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Box bg="teal.500" color="white" p={4}>
      <Flex alignItems="center">
        <Heading size="lg">Shop</Heading>
        <Spacer />
        <NavLink to="/" style={{ margin: '0 10px' }}>
          <Link color="white">Home</Link>
        </NavLink>
        <NavLink to="/men" style={{ margin: '0 10px' }}>
          <Link color="white">Men</Link>
        </NavLink>
        <NavLink to="/women" style={{ margin: '0 10px' }}>
          <Link color="white">Women</Link>
        </NavLink>
        <NavLink to="/kids" style={{ margin: '0 10px' }}>
          <Link color="white">Kids</Link>
        </NavLink>
        <NavLink to="/orders" style={{ margin: '0 10px' }}>
          <Link color="white">Orders</Link>
        </NavLink>
        <NavLink to="/wishlist" style={{ margin: '0 10px' }}>
          <Link color="white">Wishlist</Link>
        </NavLink>
      </Flex>
    </Box>
  );
};

export default Header;
