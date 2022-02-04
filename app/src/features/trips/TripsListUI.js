export const TripsListUI = ({ data }) => (
  <div>
    <h2>Trips</h2>
    {!data.trips.length && `you don't have any trips yet`}
    <ul>
      {data.trips.map((trip) => (
        <li key={trip.id}>{trip.name}</li>
      ))}
    </ul>
  </div>
);
