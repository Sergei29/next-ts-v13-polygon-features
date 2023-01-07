import React from "react";

import { ShipSummary } from "@/types";
import ShipSummaryItem from "./ShipSummaryItem";

type Props = {
  ships?: ShipSummary[];
  loading?: boolean;
  error?: string | null;
};

const ShipsList = ({ ships, loading = false, error }: Props): JSX.Element => {
  if (loading) {
    return <h4 className="text-red-600 font-bold text-center">Loading...</h4>;
  }
  if (error) {
    return <h4 className="text-red-600 font-bold text-center">{error}</h4>;
  }
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {!!ships?.length ? (
        ships.map(({ id, image, home_port, name }) => (
          <ShipSummaryItem
            key={id}
            shipSummary={{ id, image, home_port, name }}
          />
        ))
      ) : (
        <h4 className="text-red-600 font-bold text-center">No results.</h4>
      )}
    </div>
  );
};

export default ShipsList;
