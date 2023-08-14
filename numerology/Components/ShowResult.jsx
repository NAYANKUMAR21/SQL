import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';

function StatsCardFirst(props) {
  const { title, titl2, titl3, stat, stat2, stat3, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
    >
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} isTruncated>
            {title} - {stat}
          </StatLabel>
          <StatNumber fontSize={'medium'} fontWeight={'medium'}>
            {titl2} - {stat2}
          </StatNumber>
          <StatNumber fontSize={'medium'} fontWeight={'medium'}>
            {titl3} - {stat3}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}
function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
    >
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function BasicStatistics({ details }) {
  console.log(details);
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCardFirst
          title={'Date'}
          titl2={'Month'}
          titl3={'Year'}
          stat={details.Date}
          stat2={details.month}
          stat3={details.year}
          icon={<BsPerson size={'3em'} />}
        />
        <StatsCard
          title={'Date of Birth Total'}
          stat={details.DateOfBirth}
          icon={<FiServer size={'3em'} />}
        />
        <StatsCard
          title={'Name Total'}
          stat={details.NameNumerology}
          icon={<GoLocation size={'3em'} />}
        />
      </SimpleGrid>
    </Box>
  );
}
