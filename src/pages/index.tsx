import type { NextPage } from "next";
import Head from "next/head";

type PageProps = {};

const HomePage: NextPage<PageProps> = ({}) => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Next page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>HomePage</h1>
      </main>
    </>
  );
};

export default HomePage;
