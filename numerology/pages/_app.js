import { InputValueProvider } from '@/Components/COntext';
import { ChakraProvider } from '@chakra-ui/react';
export default function App({ Component, pageProps }) {
  return (
    <InputValueProvider>
      <ChakraProvider>
        {' '}
        <Component {...pageProps} />
      </ChakraProvider>
    </InputValueProvider>
  );
}
