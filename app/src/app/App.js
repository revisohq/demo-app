import { useAuth } from "../OneFront";
import { gql, useQuery } from "@apollo/client";
import AppUI from "./AppUI";

const GET_ACTIVE_EXPENSES = gql`
  query getActiveExpense {
    expenses(where: { category: { is_active: { _eq: true } } }) {
      id
      currency
      amount
      note
      category {
        name
      }
    }
  }
`;

function App() {
  const auth = useAuth();
  const expenses = useQuery(GET_ACTIVE_EXPENSES);
  const records = expenses.data ? expenses.data.expenses : [];

  return <AppUI auth={auth} records={records} />;
}

export default App;
