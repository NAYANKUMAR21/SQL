import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Button,
  Input,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const Todo = () => {
  const [state, setstate] = useState({
    name: '',
    age: '',
    LastName: '',
  });
  const handleClick = () => {
    console.log(state);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setstate({ ...state, [name]: value });
  };
  const isError = '';
  return (
    <Box m="auto" width={'80%'}>
      <FormControl isInvalid={isError}>
        <FormLabel>Email</FormLabel>
        <Input type="email" onChange={handleInputChange} />
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      </FormControl>
      <FormControl isInvalid={isError}>
        <FormLabel>Email</FormLabel>
        <Input type="email" onChange={handleInputChange} />
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      </FormControl>
      <FormControl isInvalid={isError}>
        <FormLabel>Email</FormLabel>
        <Input type="email" onChange={handleInputChange} />
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      </FormControl>
      <Box>
        <Button onClick={handleClick}>Submit</Button>
      </Box>
    </Box>
  );
};

export default Todo;
