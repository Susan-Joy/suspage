import React from 'react';
import { Box, Heading, Text, SimpleGrid, Image, Link } from '@chakra-ui/react';

const products = [
  { id: 1, name: 'Men T-Shirt', price: '$25', image: '/images/men-tshirt.jpg' },
  { id: 2, name: 'Men Shoes', price: '$50', image: '/images/men-shoes.jpg' },
  { id: 3, name: 'Men Jacket', price: '$60', image: '/images/men-jacket.jpg' },
];

const Men = () => {
  return (
    <Box padding="4">
      <Heading mb={4}>Men Section</Heading>
      <Text fontSize="lg" mb={8}>
        Shop the latest men's collection.
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {products.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" padding="4">
            <Image src={product.image} alt={product.name} />
            <Box p="4">
              <Heading size="md">{product.name}</Heading>
              <Text mt={2}>{product.price}</Text>
              <Link href={`/product/${product.id}`} color="teal.500" mt={4}>
                View Details
              </Link>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Men;
