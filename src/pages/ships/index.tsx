import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";

import ShipsList from "@/components/ShipsList";
import { GET_SHIPS_LIST, apolloClient } from "@/graphql/client";
import { ShipSummary } from "@/types";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data, error } = await apolloClient.query<{ ships: ShipSummary[] }>({
    query: GET_SHIPS_LIST,
  });

  return {
    props: {
      ships: data.ships,
      error: error?.message || null,
    },
    revalidate: 600,
  };
};

type PageProps = {
  ships: ShipSummary[];
  error: string | null;
};

const ShipsListPage: NextPage<PageProps> = ({ ships, error }) => {
  return (
    <>
      <Head>
        <title>Ship List Page</title>
        <meta name="description" content="List of Spacex ships" />
      </Head>

      <>
        <h1 className="py-4 text-center">Ships List Page</h1>
        <ShipsList ships={ships} error={error} />
      </>
    </>
  );
};

export default ShipsListPage;
