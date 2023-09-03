import { Box, Button, List, ListItem } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { USER_LOGOUT } from '../Redux/Types/Auth.types';

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <Box
      textAlign={'center'}
      m="auto"
      p="15px"
      bgGradient="linear(to-r, orange.200, blue.400)"
    >
      <Box>
        <Button
          cursor={'pointer'}
          boxShadow={'md'}
          m="auto"
          width={['50%', '30%', '20%', '10%']}
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          onClick={() => dispatch({ type: USER_LOGOUT })}
          color={'white'}
          _hover={{
            bgGradient: 'linear(to-l, #7928CA, #FF0080)',
          }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
