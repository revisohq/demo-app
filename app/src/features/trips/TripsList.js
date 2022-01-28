import { gql, useQuery } from "@apollo/client";
import { TripsListUI } from "./TripsListUI";

const GET_MY_TRIPS = gql`
  query getMyTrips {
    trips {
      id
      name
    }
  }
`;

export const TripsList = () => {
  const { data } = useQuery(GET_MY_TRIPS);

  if (!data) return "loading....";

  return <TripsListUI data={data} />;
};
