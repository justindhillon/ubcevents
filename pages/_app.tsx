import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;