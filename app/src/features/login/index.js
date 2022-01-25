import Login from "./Login";

export const login = ({ registerAction }) => {
  registerAction({
    hook: "$ONE_LOGIN",
    handler: () => Login
  });
};
