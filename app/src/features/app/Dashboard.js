import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const GET_ORANGES = gql`
  query MyQuery {
    items: oranges {
      brand
      id
      quantity: qt
    }
  }
`;

const Dashboard = () => {
  const { data } = useQuery(GET_ORANGES);

  return (
    <div>
      {data &&
        data.items.map(($item) => (
          <li key={$item.id}>
            {$item.brand} - {$item.quantity}
          </li>
        ))}
      the dashboard - <Link to="/">go Home</Link>
    </div>
  );
};

export default Dashboard;
