import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { wrapper } from 'redux/store';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore();
  return (
    // @ts-ignore
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      <Component {...pageProps} />
    </PersistGate>
  );
}

export default wrapper.withRedux(MyApp);
