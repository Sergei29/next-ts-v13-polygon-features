import type { AppProps } from "next/app";
import { Hydrate, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import FavoritesProvider from "@/providers/FavoritesProvider";
import { queryClient } from "@/queryClient";
import Layout from "@/components/Layout";
import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <FavoritesProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ReactQueryDevtools initialIsOpen={false} />
        </FavoritesProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default App;
