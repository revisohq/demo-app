import { TripsList } from "./TripsList";
import { TripsMenuItem } from "./TripsMenuItems";
const AddTrip = () => "new trip";

export const trips = () => [
  {
    hook: "$ONE_LAYOUT_DRAWER_SECONDARY_LIST_ITEMS",
    handler: { component: TripsMenuItem }
  },
  {
    hook: "$ONE_ROUTE",
    handler: {
      path: "/trips",
      exact: true,
      element: <TripsList />
    }
  },
  {
    hook: "$ONE_ROUTE",
    handler: {
      path: "/trips/add",
      exact: true,
      element: <AddTrip />
    }
  }
];
