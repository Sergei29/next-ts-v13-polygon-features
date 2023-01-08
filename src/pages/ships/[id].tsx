import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

import {
  GET_SHIP_BY_ID,
  initialiseApolloClient,
  addApolloState,
} from "@/graphql/client";
import ShipParticulars from "@/components/ShipParticulars";
import { ShipDetails } from "@/types";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const shipId = ctx.params?.id as string;
  const apolloClient = initialiseApolloClient();
  await apolloClient.query<{ ships: ShipDetails[] }>({
    query: GET_SHIP_BY_ID,
    variables: { id: shipId },
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

type PageProps = {};

const ShipDetailsPage: NextPage<PageProps> = () => {
  const router = useRouter();
  const { data, error } = useQuery<{ ship: ShipDetails }>(GET_SHIP_BY_ID, {
    variables: { id: router.query.id },
  });

  return (
    <>
      <Head>
        <title>Ship Particulars</title>
        <meta name="description" content="Ship particulars" />
      </Head>

      <>
        {data?.ship && (
          <h1 className="py-4 text-center font-bold text-3xl underline">
            {data.ship.id}
            {data.ship.isFavorite && <span className="ml-2">✨</span>}
          </h1>
        )}
        <ShipParticulars shipDetails={data?.ship} error={error?.message} />
      </>
    </>
  );
};

export default ShipDetailsPage;
