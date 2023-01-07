import { gql } from "@apollo/client";

export const GET_NEXT_LAUNCH = gql`
  query NextLaunch {
    launchNext {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
    }
  }
`;

export const GET_SHIPS_LIST = gql`
  query Ships {
    ships {
      active
      id
      image
      name
      model
      year_built
      class
      home_port
    }
  }
`;

export const GET_SHIP_BY_ID = gql`
  query Ship($id: ID!) {
    ship(id: $id) {
      isFavorite @client
      active
      id
      image
      name
      model
      year_built
      class
      home_port
      missions {
        name
        flight
      }
      attempted_landings
      successful_landings
      url
      roles
    }
  }
`;
