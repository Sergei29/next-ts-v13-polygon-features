import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

type PageProps = {};

const ShipDetailsPage: NextPage<PageProps> = ({}) => {
  const router = useRouter();
  const id = router.query.id as string;

  return (
    <>
      <Head>
        <title>Ship Particulars</title>
        <meta name="description" content="Ship particulars" />
      </Head>

      <>
        <h1>Ship Details Page, id: {id}</h1>
      </>
    </>
  );
};

export default ShipDetailsPage;
