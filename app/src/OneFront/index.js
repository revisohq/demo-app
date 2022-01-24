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

  const AppRoot = () => {
    const routes = createHook.sync(hooks.ONE_FRONT_ROUTE);
    return <Routes routes={routes} />;
  };

  const AuthWrapper = (props) => {
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
      <AuthProvider
        {...props}
        loginComponent={Login}
        loadingComponent={Loading}
      />
    );
  };

  registerAction({
    hook: "$REACT_ROOT_WRAPPER",
    handler: { component: AuthWrapper }
  });

  registerAction({
    hook: "$REACT_ROOT_WRAPPER",
    handler: { component: LayoutProvider }
  });

  registerAction({
    hook: "$REACT_ROOT_COMPONENT",
    handler: { component: AppRoot }
  });
};
