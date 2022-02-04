import App from "./App";
import Dashboard from "./Dashboard";
import { AppMenuItems } from "./AppMenuItems";

export const app = () => [
  {
    hook: "$ONE_LAYOUT_DRAWER_PRIMARY_LIST_ITEMS",
    handler: { component: AppMenuItems }
  },
  {
    hook: "$ONE_ROUTE",
    handler: {
      path: "/",
      exact: true,
      element: <App />
    }
  },
  {
    hook: "$ONE_ROUTE",
    handler: {
      path: "/dashboard",
      exact: true,
      element: <Dashboard />
    }
  }
];
