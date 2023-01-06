import type { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "@apollo/client";

import ShipsList from "@/components/ShipsList";
import { GET_SHIPS_LIST } from "@/graphql/client";
import { ShipSummary } from "@/types";

type PageProps = {};

const ShipsListPage: NextPage<PageProps> = ({}) => {
  const { data, loading, error } = useQuery<{ ships: ShipSummary[] }>(
    GET_SHIPS_LIST
  );

  return (
    <>
      <Head>
        <title>Ship List Page</title>
        <meta name="description" content="List of Spacex ships" />
      </Head>

      <>
        <h1 className="py-4 text-center">Ships List Page</h1>
        <ShipsList
          ships={data?.ships}
          loading={loading}
          error={error?.message}
        />
      </>
    </>
  );
};

export default ShipsListPage;
