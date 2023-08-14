import call from '@/Calc';
import Loaders from '@/Components/Loaders';
import BasicStatistics from '@/Components/ShowResult';

import { Box, Center, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
const NoticeBoard = ({ message }) => {
  const [loading, setloading] = useState(false);
  const [state, setState] = useState({
    Date: '',
    month: '',
    year: '',
    DateOfBirth: '',
    NameNumerology: '',
  });
  const router = useRouter();
  const handleRoute = () => {
    return router.push('/numerology');
  };
  useEffect(() => {
    setloading(true);
    let y = JSON.parse(localStorage.getItem('Credentails'));
    let x = getNumber(y);
    setloading(false);
    return setState(x);
  }, []);
  return !loading ? (
    <Center h="100vh" bgGradient="linear(to-b, #4A90E2, #8E1E83)">
      <Box
        p={8}
        bg="whiteAlpha.900"
        borderRadius="md"
        boxShadow="lg"
        maxW="1000px"
        w="100%"
      >
        <Box
          onClick={handleRoute}
          cursor={'pointer'}
          __hover={{
            border: '1px solid Black',
            borderRadius: '5px',
            width: '10%',
          }}
        >
          <BiArrowBack />
        </Box>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Notice Board
        </Text>
        <BasicStatistics details={state} />
      </Box>
    </Center>
  ) : (
    <Loaders />
  );
};

function getNumber(y) {
  // Fetch data from an API, database, or any asynchronous operation
  //   const response = await fetch('https://api.example.com/data');
  //   const data = await response.json();

  let x = call(y);
  console.log(y);
  console.log(x);
  return {
    Date: x.Date,
    month: x.month,
    year: x.year,
    DateOfBirth: x.total,
    NameNumerology: x.nameNumo,
  };
}

export default NoticeBoard;
