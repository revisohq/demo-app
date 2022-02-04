import Login from "./Login";

export const login = () => ({
  hook: "$ONE_LOGIN",
  handler: () => Login
});
