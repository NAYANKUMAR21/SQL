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
import { useDispatch, useSelector } from 'react-redux';
import { SignUPAction } from '../Redux/Actions/auth.actions';
import { NavLink, Navigate } from 'react-router-dom';
import { handleChangePicture } from '../Utils/cloud';

const SignUp = () => {
  const dispatch = useDispatch();
  const [cred, setCred] = useState({
    name: '',
    avatar: '',
    email: '',
    password: '',
  });
  const { isSigned, loading, signupError } = useSelector((state) => state.User);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    if (e.target.name == 'avatar') {
      setCred({ ...cred, [e.target.name]: e.target.files });
    } else {
      const { name, value } = e.target;
      setCred({ ...cred, [name]: value });
    }
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const { name, avatar, email, password } = cred;
    if (!name || !avatar || !email || !password) {
      return alert('Please Fill All feilds');
    }
    let image = await handleChangePicture(cred.avatar);
    //{/*  */}
    // dispatch(SignUPAction({ ...cred, avatar: image }));
    image = image.trim();
    dispatch(
      SignUPAction({
        ...cred,
        name: name.trim(),
        email: email.trim(),
        password: password.trim(),
        avatar: image,
      })
    );
    return;
  };
  if (signupError) {
    return <Navigate to="/login" />;
  }
  if (isSigned) {
    return <Navigate to="/login" />;
  }
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
              <FormControl id="avatar" isRequired>
                <FormLabel>Avatar</FormLabel>
                <Input
                  onChange={handleChange}
                  name="avatar"
                  type="file"
                  placeholder="Upload File"
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
                isLoading={loading}
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
