export const TripsListUI = ({ data }) => (
  <ul>
    {data.trips.map((trip) => (
      <li key={trip.id}>{trip.name}</li>
    ))}
  </ul>
);
