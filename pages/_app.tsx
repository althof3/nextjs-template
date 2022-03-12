import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { wrapper } from 'redux/store';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore();
  return (
    <ChakraProvider>
      {/* @ts-ignore */}
      <PersistGate persistor={store.__persistor} loading={<Component {...pageProps} />}>
        <Component {...pageProps} />
      </PersistGate>
    </ChakraProvider>
  );
}

export default wrapper.withRedux(MyApp);
