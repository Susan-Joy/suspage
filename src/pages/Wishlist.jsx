import React from 'react';
import { Box, Heading, Text, List, ListItem } from '@chakra-ui/react';

const wishlistItems = [
  { id: 1, name: 'Kids T-Shirt', price: '$20' },
  { id: 2, name: 'Men Shoes', price: '$50' },
];

const Wishlist = () => {
  return (
    <Box padding="4">
      <Heading mb={4}>Your Wishlist</Heading>
      <List spacing={3}>
        {wishlistItems.map((item) => (
          <ListItem key={item.id}>
            <Text>
              {item.name} - {item.price}
            </Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Wishlist;
