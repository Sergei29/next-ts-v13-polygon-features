import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { State } from "@/store";
import { useDispatch, useSelector } from "react-redux";

interface IPageProps {
  [x: string]: any;
}

const OtherPage: NextPage<IPageProps> = ({}) => {
  const tickState = useSelector<State, string>((state) => state.tick);
  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>Page</title>
        <meta name="description" content="Next page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold underline">Other page</h1>
        <h4 className="text-xl font-bold ">{tickState}</h4>
        <button
          onClick={() =>
            dispatch({
              type: "TICK",
              payload: "Set on other page",
            })
          }
          className="px-2 py-1 bg-purple-800 text-yellow-100 rounded-md max-w-[250px]"
        >
          set tick
        </button>
      </div>
    </>
  );
};

export default OtherPage;
