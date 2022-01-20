import logo from "./logo.svg";
import "./App.css";
import { useAuth } from "./AuthProvider";
import { gql, useQuery } from "@apollo/client";

const GET_ACTIVE_EXPENSES = gql`
  query getActiveExpense {
    expenses(where: { category: { is_active: { _eq: true } } }) {
      id
      currency
      category {
        name
      }
      amount
    }
  }
`;

function App() {
  const auth = useAuth();
  const expenses = useQuery(GET_ACTIVE_EXPENSES);
  const records = expenses.data ? expenses.data.expenses : [];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Logged in as: {auth.user.name}
        <hr />
        <button onClick={auth.logout}>logout</button>
        <hr />
        <ul>
          {records.map((record) => (
            <li key={record.id}>
              {record.category.name} - {record.amount} {record.currency}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
