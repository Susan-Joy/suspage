import React, { useState } from 'react';
import { Input, Button, Box, Heading, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useModalContext } from '../App';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [userRole, setUserRole] = useState('');

  const navigate = useNavigate();
  const { onOpen } = useModalContext();

  const handleRegister = () => {
    // Implement the registration logic here (e.g., API call)
  };

  const handleLogin = () => {
    onOpen(); // Open login modal
    navigate('/'); // Redirect to home page after login
  };

  return (
    <Box maxWidth="500px" margin="auto" mt="10">
      <Heading as="h2" mb="6" textAlign="center">Create an Account</Heading>
      <VStack spacing={4}>
        <Input placeholder="Name" mb="3" value={name} onChange={(e) => setName(e.target.value)} />
        <Input placeholder="Email" mb="3" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Password" type="password" mb="3" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input placeholder="Phonenumber" type="number" mb="3" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
        <Input placeholder="Address" mb="3" value={address} onChange={(e) => setAddress(e.target.value)} />
        <Input placeholder="City" mb="3" value={city} onChange={(e) => setCity(e.target.value)} />
        <Input placeholder="State" mb="3" value={state} onChange={(e) => setState(e.target.value)} />
        <Input placeholder="Postal Code" mb="3" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
        <Input placeholder="Country" mb="3" value={country} onChange={(e) => setCountry(e.target.value)} />
        <Input placeholder="Userrole" mb="3" value={userRole} onChange={(e) => setUserRole(e.target.value)} />
        <Button colorScheme="primary" width="100%" onClick={handleRegister}> Register </Button>
        <Button variant="ghost" width="100%" colorScheme="primary" onClick={handleLogin}> Already have an account? Login </Button>
      </VStack>
    </Box>
  );
};

export default RegisterPage;
