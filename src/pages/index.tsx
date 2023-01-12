import React from "react";
import { NextPage } from "next";
import Head from "next/head";

import { useDispatch, useSelector } from "react-redux";

import { State } from "@/store";
interface IPageProps {
  [x: string]: any;
}

const HomePage: NextPage<IPageProps> = ({}) => {
  const tickState = useSelector<State, string>((state) => state.tick);
  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Rick An Morty Characters" />
      </Head>

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold underline">Home page</h1>
        <h4 className="text-xl font-bold ">{tickState}</h4>
        <button
          onClick={() =>
            dispatch({
              type: "TICK",
              payload: "Set on homepage",
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

export default HomePage;
