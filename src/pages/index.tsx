import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';

import { initialiseApolloClient, addApolloState, GET_CHARACTERS } from '@/graphql/client';
import CharacterGrid from '@/components/CharacterGrid';

export const getStaticProps: GetStaticProps = async (ctx) => {
  const apolloClient = initialiseApolloClient();
  await apolloClient.query({
    query: GET_CHARACTERS,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
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

      <CharacterGrid />
    </>
  );
};

export default HomePage;
