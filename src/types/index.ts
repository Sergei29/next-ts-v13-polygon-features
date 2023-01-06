export type LaunchNext = {
  mission_name: string;
  launch_date_local: string;
  launch_site: {
    site_name_long: string;
  };
};

export type ShipSummary = {
  id: string;
  active: boolean;
  image: string | null;
  name: string;
  model: string | null;
  year_built: number;
  class: number | string | null;
  home_port: string;
};

export type ShipDetails = {
  missions: { name: string; flight: string }[];
  attempted_landings: string | null;
  successful_landings: string | null;
  url: string | null;
  roles: string[];
} & ShipSummary;
