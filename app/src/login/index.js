import Login from "./Login";

export const login = ({ registerAction }) => {
  registerAction({
    hook: "$ONE_FRONT_LOGIN",
    handler: () => Login
  });
};
