import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

import { GET_SHIP_BY_ID, apolloClient } from "@/graphql/client";
import ShipParticulars from "@/components/ShipParticulars";
import { ShipDetails } from "@/types";

const getShipDetails = async (
  id: string
): Promise<{
  ship: ShipDetails | null;
  error: string | null;
}> => {
  try {
    const { data, error } = await apolloClient.query<{ ship: ShipDetails }>({
      query: GET_SHIP_BY_ID,
      variables: { id },
    });

    if (!!error) {
      throw new Error(error.message);
    }

    return { ship: data.ship, error: null };
  } catch (error) {
    return {
      ship: null,
      error: (error as Error).message || "Failed to get ship details",
    };
  }
};

/**
 * @description for some reason, there was a problem recently to generate statically page while using `apolloCLient.query()` within the `GetStaticProps` in build-time, so as alternative using `getServerSideProps` instead.
 */
// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const id = params?.id as string;

//   const { ship, error } = await getShipDetails(id);

//   return {
//     props: {
//       ship,
//       error,
//     },
//   };
// };

type PageProps = {
  // ship: ShipDetails | null;
  // error: string | null;
};

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
