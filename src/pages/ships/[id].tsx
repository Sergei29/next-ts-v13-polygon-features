import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

import { GET_SHIP_BY_ID } from "@/graphql/client";
import ShipParticulars from "@/components/ShipParticulars";
import { ShipDetails } from "@/types";

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
