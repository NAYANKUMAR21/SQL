import { Avatar, Box, Button, List, ListItem, Wrap } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { USER_LOGOUT } from '../Redux/Types/Auth.types';

const Navbar = () => {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.User);

  return (
    <Box
      textAlign={'center'}
      m="auto"
      p="15px"
      bgGradient="linear(to-r, orange.200, blue.400)"
    >
      <Box>
        <Box>
          <Avatar
            size="2xl"
            // name="Dan Abrahmov"
            // src="https://bit.ly/dan-abramov"
            name={User?.name}
            src={User.avatar}
          />
        </Box>
        <Button
          cursor={'pointer'}
          boxShadow={'md'}
          m="auto"
          mt={'10px'}
          width={['50%', '30%', '20%', '10%']}
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          onClick={() => dispatch({ type: USER_LOGOUT })}
          color={'white'}
          _hover={{
            bgGradient: 'linear(to-l, #7928CA, #FF0080)',
            boxShadow: 'xl',
          }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
