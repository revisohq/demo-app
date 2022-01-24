import { Route, Routes } from "react-router-dom";

const AppRoutes = ({ routes }) => (
  <Routes>
    {routes
      .map(($) => $[0])
      .map((route) => (
        <Route key={route.path} {...route} />
      ))}
  </Routes>
);

export default AppRoutes;
