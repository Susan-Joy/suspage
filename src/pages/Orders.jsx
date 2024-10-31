import React from 'react';
import { Box, Heading, Text, List, ListItem } from '@chakra-ui/react';

const orders = [
  { id: 1, name: 'Men T-Shirt', status: 'Delivered', date: '2024-09-20' },
  { id: 2, name: 'Women Heels', status: 'Shipped', date: '2024-09-21' },
];

const Orders = () => {
  return (
    <Box padding="4">
      <Heading mb={4}>Your Orders</Heading>
      <List spacing={3}>
        {orders.map((order) => (
          <ListItem key={order.id}>
            <Text>
              {order.name} - {order.status} (Ordered on: {order.date})
            </Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Orders;
