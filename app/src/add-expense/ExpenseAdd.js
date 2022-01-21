import { gql, useQuery, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import ExpenseAddUI from "./ExpenseAddUI";

const LIST_CATEGORIES = gql`
  query listCategories {
    items: categories(where: { is_active: { _eq: true } }) {
      name
      id
    }
  }
`;

const ADD_EXPENSE = gql`
  mutation addExpense(
    $amount: numeric!
    $category: uuid!
    $currency: String!
    $note: String!
  ) {
    insert_expenses(
      objects: {
        amount: $amount
        category_id: $category
        currency: $currency
        note: $note
      }
    ) {
      affected_rows
      returning {
        id
      }
    }
  }
`;

const ExpenseAdd = () => {
  const history = useHistory();
  const categoriesData = useQuery(LIST_CATEGORIES);
  const [addExpense] = useMutation(ADD_EXPENSE);
  const categories = categoriesData.data ? categoriesData.data.items : [];

  const saveForm = (data) => {
    console.log("saving...", data);

    addExpense({
      variables: {
        ...data,
        amount: Number(data.amount),
        currency: "Eur",
        note: ""
      }
    })
      .then((res) => {
        history.push("/");
      })
      .catch((err) => console.error(err));
  };

  const abortForm = () => history.push("/");

  return (
    <ExpenseAddUI
      categories={categories}
      saveForm={saveForm}
      abortForm={abortForm}
    />
  );
};

export default ExpenseAdd;
