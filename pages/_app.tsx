import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={pageProps.session}>
        <Head>
          <link rel="icon" href="/images/favicon/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png"/>
        </Head>
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default App;