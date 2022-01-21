import * as hooks from "./hooks";
import AuthProvider from "./AuthProvider";
import LayoutProvider from "./LayoutProvider";
import Routes from "./Routes";

export { useAuth } from "./AuthProvider";

export const OneFront = ({
  registerHook,
  createHook,
  registerAction,
  getConfig
}) => {
  registerHook(hooks);

  registerAction({
    hook: "$REACT_ROOT_WRAPPER",
    handler: (App) => {
      // Let customize the Login interface wrapper
      const { value: Login } = createHook.waterfall(
        hooks.ONE_FRONT_LOGIN,
        getConfig("oneFront.login.component", () => "login")
      );

      // Let customize the Login interface wrapper
      const { value: Loading } = createHook.waterfall(
        hooks.ONE_FRONT_LOADING,
        getConfig("oneFront.loading.component", () => "loading")
      );

      return (
        <AuthProvider loginComponent={Login} loadingComponent={Loading}>
          {App}
        </AuthProvider>
      );
    }
  });

  registerAction({
    hook: "$REACT_ROOT_WRAPPER",
    handler: (App) => <LayoutProvider>{App}</LayoutProvider>
  });

  registerAction({
    hook: "$REACT_ROOT_COMPONENT",
    handler: () => {
      const routes = createHook.sync(hooks.ONE_FRONT_ROUTE);
      return <Routes routes={routes} />;
    }
  });
};
