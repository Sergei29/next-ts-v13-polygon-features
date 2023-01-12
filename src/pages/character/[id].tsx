import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { dehydrate, useQuery } from "@tanstack/react-query";

import { getCharacterbyId } from "@/lib";
import { queryKeys } from "@/constants";
import { CharacterDetails } from "@/types";
import DisplayCharacter from "@/components/DisplayCharacter";

interface IPageProps {
  [x: string]: any;
}

const CharacterPage: NextPage<IPageProps> = ({}) => {
  const router = useRouter();
  const characterId = router.query.id as string | undefined;

  const { data, isLoading, isError } = useQuery(
    [queryKeys.characters, characterId],
    () => getCharacterbyId(characterId || ""),
    {
      enabled: !!characterId,
    }
  );

  return (
    <>
      <Head>
        <title>Page</title>
        <meta name="description" content="Next page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DisplayCharacter data={data} isLoading={isLoading} isError={isError} />
    </>
  );
};

export default CharacterPage;
