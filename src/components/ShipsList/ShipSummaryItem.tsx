import React from "react";
import Image from "next/image";
import Link from "next/link";

import { ShipSummary } from "@/types";

type Props = {
  shipSummary: Pick<
    ShipSummary,
    "id" | "image" | "name" | "home_port" | "isFavorite"
  >;
};

const ShipSummaryItem = ({ shipSummary }: Props): JSX.Element => {
  const { id, image, name, home_port } = shipSummary;

  return (
    <Link href={`/ships/${id}`} className="bg-slate-300 p-1 rounded-sm w-1/5">
      {image ? (
        <Image
          src={image}
          height={150}
          width={240}
          alt={name}
          className="w-15 h-40"
        />
      ) : (
        <div className="w-15 h-40 flex justify-center items-center">
          <span>no image</span>
        </div>
      )}
      <h4>{name}</h4>
      <p>Home port:{home_port} </p>
    </Link>
  );
};

export default ShipSummaryItem;
