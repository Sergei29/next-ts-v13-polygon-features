import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

import ShipParticulars from "@/components/ShipParticulars";
import { GET_SHIP_BY_ID } from "@/graphql/client";
import { ShipDetails } from "@/types";

type PageProps = {};

const ShipDetailsPage: NextPage<PageProps> = ({}) => {
  const router = useRouter();
  const id = router.query.id as string;
  const { data, loading, error } = useQuery<{ ship: ShipDetails }>(
    GET_SHIP_BY_ID,
    {
      variables: { id },
    }
  );

  return (
    <>
      <Head>
        <title>Ship Particulars</title>
        <meta name="description" content="Ship particulars" />
      </Head>

      <>
        <h1 className="py-4 text-center font-bold text-3xl underline"> {id}</h1>
        <ShipParticulars
          shipDetails={data?.ship}
          loading={loading}
          error={error?.message}
        />
      </>
    </>
  );
};

export default ShipDetailsPage;
