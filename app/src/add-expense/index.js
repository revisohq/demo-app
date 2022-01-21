import ExpenseAdd from "./ExpenseAdd";

export const addExpense = ({ registerAction }) => {
  registerAction({
    hook: "$ONE_FRONT_ROUTE",
    handler: {
      path: "/expense/add",
      exact: true,
      component: ExpenseAdd
    }
  });
};
