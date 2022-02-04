import ExpenseAdd from "./ExpenseAdd";
import { AddExpenseMenuItems } from "./AddExpenseMenuItems";

export const addExpense = () => [
  {
    hook: "$ONE_LAYOUT_DRAWER_PRIMARY_LIST_ITEMS",
    handler: { component: AddExpenseMenuItems }
  },
  {
    hook: "$ONE_ROUTE",
    handler: {
      path: "/expense/add",
      exact: true,
      element: <ExpenseAdd />
    }
  }
];
