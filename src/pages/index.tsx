import React from "react";
import { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { dehydrate, useQuery } from "@tanstack/react-query";

import { getCharacters } from "@/lib";
import { queryKeys } from "@/constants";
import { generateQueryCLient } from "@/queryClient";
import CharacterGrid from "@/components/CharacterGrid";
import Favorites from "@/components/Favorites";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const queryClient = generateQueryCLient();
  await queryClient.prefetchQuery([queryKeys.characters], () =>
    getCharacters()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

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
       */}
      <CharacterGrid />
    </>
  );
};

export default HomePage;
