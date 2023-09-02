import React, { useState } from 'react';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Heading,
  IconButton,
  InputGroup,
  InputRightElement,
  Center,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { SignUPAction } from '../Redux/Actions/auth.actions';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
  const dispatch = useDispatch();
  const [cred, setCred] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCred({ ...cred, [name]: value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(SignUPAction(cred));
    return console.log(cred);
  };

  return (
    <Flex
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-b, #FFFF00, #0099CC)"
    >
      <Box
        p={8}
        width={['90%', '80%', '60%', '40%']} // Responsive width
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        bg="white"
      >
        <Box textAlign="center">
          <Heading>Sign Up</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={handleClick}>
            <Stack spacing={4}>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  value={cred.name}
                  onChange={handleChange}
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  focusBorderColor="teal.400"
                  _placeholder={{ color: 'gray.500' }}
                />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input
                  value={cred.email}
                  onChange={handleChange}
                  name="email"
                  type="email"
                  placeholder="youremail@example.com"
                  focusBorderColor="teal.400"
                  _placeholder={{ color: 'gray.500' }}
                />
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    value={cred.password}
                    onChange={handleChange}
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Your Password"
                    focusBorderColor="teal.400"
                    _placeholder={{ color: 'gray.500' }}
                  />
                  <InputRightElement width="3rem">
                    <IconButton
                      h="1.75rem"
                      size="sm"
                      onClick={togglePasswordVisibility}
                      icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Button
                type="submit"
                colorScheme="teal"
                size="lg"
                fontSize="md"
                fontWeight="bold"
              >
                Sign Up
              </Button>
              <Box style={{ textAlign: 'Center' }}>
                have an Account ?{' '}
                <NavLink style={{ color: 'blue' }} to="/login">
                  Login
                </NavLink>
              </Box>
            </Stack>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default SignUp;
