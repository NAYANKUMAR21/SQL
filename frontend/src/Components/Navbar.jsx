import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react';

const Navbar = () => {
  return (
    <Box>
      <Box
        w="60%"
        m="auto"
        border={'1px solid black'}
        p="10px"
        borderRadius={'10px'}
      >
        <UnorderedList
          display={'flex'}
          listStyleType={'none'}
          justifyContent={'space-between'}
        >
          <ListItem
            p="10px"
            _hover={{
              backgroundColor: 'blue',
              color: 'white',
              borderRadius: '5px',
            }}
          >
            Home
          </ListItem>
          <ListItem
            _hover={{
              backgroundColor: 'blue',
              color: 'white',
              borderRadius: '5px',
            }}
            p="10px"
          >
            Icon 1
          </ListItem>
          <ListItem
            _hover={{
              backgroundColor: 'blue',
              color: 'white',
              borderRadius: '5px',
            }}
            p="10px"
          >
            Icon 2
          </ListItem>
          <ListItem
            _hover={{
              backgroundColor: 'blue',
              color: 'white',
              borderRadius: '5px',
            }}
            p="10px"
          >
            Icon 3
          </ListItem>
          <ListItem
            _hover={{
              backgroundColor: 'blue',
              color: 'white',
              borderRadius: '5px',
            }}
            p="10px"
          >
            Icon 5
          </ListItem>
          <ListItem
            _hover={{
              backgroundColor: 'blue',
              color: 'white',
              borderRadius: '5px',
            }}
            p="10px"
          >
            Icon 4
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default Navbar;
