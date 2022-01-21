import { Route } from "react-router-dom";

const Routes = ({ routes }) =>
  routes.map(($) => $[0]).map((route) => <Route key={route.path} {...route} />);

export default Routes;
