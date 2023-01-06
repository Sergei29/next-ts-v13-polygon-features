import React from "react";
import Image from "next/image";

import { ShipDetails } from "@/types";

type Props = {
  shipDetails?: ShipDetails;
  loading?: boolean;
  error?: string;
};

const ShipParticulars = ({
  shipDetails,
  loading = false,
  error,
}: Props): JSX.Element => {
  if (loading) {
    return <h4 className="text-red-600 font-bold text-center">Loading...</h4>;
  }
  if (error) {
    return <h4 className="text-red-600 font-bold text-center">{error}</h4>;
  }
  if (!shipDetails) {
    return (
      <h4 className="text-red-600 font-bold text-center">No Information</h4>
    );
  }
  const {
    id,
    image,
    name,
    active,
    home_port,
    year_built,
    url,
    model,
    missions,
    roles,
  } = shipDetails;
  return (
    <div className="w-1/2 mx-auto">
      {image ? (
        <Image
          src={image}
          height={150}
          width={240}
          alt={name}
          className="w-full"
        />
      ) : (
        <div className="w-full h-40 bg-slate-400 flex justify-center items-center">
          <span>no image</span>
        </div>
      )}
      <h3 className="my-2 text-xl font-bold text-blue-900">
        {name}{" "}
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-normal hover:underline"
          >
            more info
          </a>
        )}
      </h3>
      <p>Year built: {year_built ?? "no info"}</p>
      <p>Model: {model ?? "no info"}</p>
      <p>{active ? "In service" : "Decomissioned"}</p>
      <p>Home port: {home_port}</p>
      <p>Roles: {roles.join(", ")}</p>
      <details>
        <summary>Missions</summary>
        <ul>
          {missions.length > 0 ? (
            missions.map(({ name, flight }) => (
              <li key={name + flight}>{name}</li>
            ))
          ) : (
            <li>no records</li>
          )}
        </ul>
      </details>
    </div>
  );
};

export default ShipParticulars;
