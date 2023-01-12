import React from "react";
import { NextPage, GetStaticProps } from "next";
import Head from "next/head";

import CharacterGrid from "@/components/CharacterGrid";
import Favorites from "@/components/Favorites";

// export const getStaticProps: GetStaticProps = async (ctx) => {
//   const apolloClient = initialiseApolloClient();
//   await apolloClient.query({
//     query: GET_CHARACTERS,
//   });

//   return addApolloState(apolloClient, {
//     props: {},
//   });
// };

interface IPageProps {
  [x: string]: any;
}

const HomePage: NextPage<IPageProps> = ({}) => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Rick An Morty Characters" />
      </Head>
      {/* <Favorites />
      <CharacterGrid /> */}
    </>
  );
};

export default HomePage;
