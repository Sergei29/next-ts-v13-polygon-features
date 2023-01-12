import React from "react";
import Image from "next/image";
import { CharacterDetails } from "@/types";

interface IProps {
  data: CharacterDetails | undefined;
  isLoading: boolean;
  isError: boolean;
}

const DisplayCharacter = ({
  data,
  isError,
  isLoading,
}: IProps): JSX.Element => {
  if (isLoading) {
    return <h4 className="text-xl text-center font-bold">Loading...</h4>;
  }
  if (isError) {
    return (
      <h4 className="text-xl text-center font-bold text-red-700">
        Error occurred
      </h4>
    );
  }
  if (!data) {
    return <h4 className="text-xl text-center font-bold">No data</h4>;
  }

  return (
    <div className="flex flex-col justify-center items-center gap-2 min-h-[80vh] bg-yellow-50 rounded-lg">
      <h1 className="text-3xl font-bold underline">{data.name}</h1>
      <h3 className="text-xl font-semibold text-purple-800">{data.species}</h3>
      <Image src={data.image} width={300} height={300} alt={data.name} />
    </div>
  );
};

export default DisplayCharacter;
