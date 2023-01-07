import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

import { useApollo } from "@/graphql/client";
import "../app/globals.css";

import Layout from "@/layout/Layout";

const App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
};

export default App;
