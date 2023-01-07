import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { useQuery } from "@apollo/client";

import {
  initialiseApolloClient,
  addApolloState,
  GET_NEXT_LAUNCH,
} from "@/graphql/client";
import { LaunchNext } from "@/types";

const fetchDate = (date: string | number | Date) => {
  const newDate = new Date(date);

  const day = newDate.getDate();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();

  return [day, month, year];
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const apolloClient = initialiseApolloClient();
  await apolloClient.query<{ launchNext: LaunchNext }>({
    query: GET_NEXT_LAUNCH,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

type PageProps = {};

const HomePage: NextPage<PageProps> = () => {
  const { data, loading, error } = useQuery<{ launchNext: LaunchNext }>(
    GET_NEXT_LAUNCH
  );
  const { mission_name, launch_date_local, launch_site } =
    data?.launchNext || {};
  const nextLaunchDate =
    launch_date_local && fetchDate(launch_date_local).join("/");

  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Launch" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <h1 className="text-lg underline px-9 my-9">Next Launch</h1>

        {!error && !!data ? (
          <div className="flex flex-col gap-2">
            <span>
              🚀 Mission name: <strong>{mission_name}</strong>
            </span>
            <span>
              📅 Date: <strong>{nextLaunchDate}</strong>
            </span>
            <span>
              🏠 Launched from: <strong>{launch_site?.site_name_long}</strong>
            </span>
          </div>
        ) : (
          <h4 className="text-red-600 text-center font-bold px-9 my-9">
            {error?.message}
          </h4>
        )}
      </>
    </>
  );
};

export default HomePage;
