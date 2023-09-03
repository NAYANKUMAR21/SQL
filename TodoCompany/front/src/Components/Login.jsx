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
  //   Text,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction } from '../Redux/Actions/auth.actions';
import { NavLink, Navigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const Auth = useSelector((state) => state.User);
  const [cred, setCred] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCred({ ...cred, [name]: value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(LoginAction(cred));
    return console.log(cred);
  };
  if (Auth.data.isAuth) {
    return <Navigate to={`/`} />;
  }
  return (
    <Flex
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
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
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={handleClick}>
            <Stack spacing={4}>
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
                <Input
                  value={cred.password}
                  onChange={handleChange}
                  name="password"
                  type="password"
                  placeholder="Your Password"
                  focusBorderColor="teal.400"
                  _placeholder={{ color: 'gray.500' }}
                />
              </FormControl>

              <Button
                type="submit"
                colorScheme="teal"
                size="lg"
                fontSize="md"
                fontWeight="bold"
              >
                Sign In
              </Button>
              <Box style={{ textAlign: 'Center' }}>
                Create An Account{' '}
                <NavLink style={{ color: 'blue' }} to="/signup">
                  Sign Up
                </NavLink>
              </Box>
            </Stack>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
