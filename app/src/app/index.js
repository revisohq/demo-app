import App from "./App";
import Dashboard from "./Dashboard";

export const app = ({ registerAction }) => {
  registerAction({
    hook: "$ONE_FRONT_ROUTE",
    handler: {
      path: "/",
      exact: true,
      component: App
    }
  });

  registerAction({
    hook: "$ONE_FRONT_ROUTE",
    handler: {
      path: "/foo",
      exact: true,
      component: Dashboard
    }
  });
};
