import React from "react";
import { NextPage } from "next";
import Head from "next/head";

import { selectAuthState, setAuthState } from "@/redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

interface IPageProps {
  [x: string]: any;
}

const HomePage: NextPage<IPageProps> = ({}) => {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Rick An Morty Characters" />
      </Head>

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold underline">Home page</h1>
        <h4 className="text-xl font-bold ">
          {authState ? "Logged in 👍" : "Not Logged In ⏳"}
        </h4>
        <button
          onClick={() =>
            authState
              ? dispatch((setAuthState as (a: boolean) => any)(false))
              : dispatch((setAuthState as (a: boolean) => any)(true))
          }
          className="px-2 py-1 bg-purple-800 text-yellow-100 rounded-md max-w-[250px]"
        >
          {authState ? "Logout" : "LogIn"}
        </button>
      </div>
    </>
  );
};

export default HomePage;
