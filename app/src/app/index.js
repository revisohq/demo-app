import App from "./App";
import Dashboard from "./Dashboard";

export const app = ({ registerAction }) => {
  registerAction({
    hook: "$ONE_FRONT_ROUTE",
    handler: {
      path: "/",
      exact: true,
      element: <App />
    }
  });

  registerAction({
    hook: "$ONE_FRONT_ROUTE",
    handler: {
      path: "/foo",
      exact: true,
      element: <Dashboard />
    }
  });
};
