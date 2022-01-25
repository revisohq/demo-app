import * as hooks from "./hooks";
import OneAuthProvider from "./containers/OneAuthProvider";
import OneLayout from "./containers/OneLayout";

export { useOneAuth } from "./containers/OneAuthProvider";

export const OneFront = ({
  registerHook,
  createHook,
  registerAction,
  getConfig,
  setContext
}) => {
  registerHook(hooks);

  registerAction({
    hook: "$INIT_SERVICE",
    handler: () => {
      const { value: LoginComponent } = createHook.waterfall(
        hooks.ONE_LOGIN,
        getConfig("oneFront.login.component", () => "login")
      );

      const { value: LoadingComponent } = createHook.waterfall(
        hooks.ONE_LOADING,
        getConfig("oneFront.loading.component", () => "...")
      );

      const layoutRoutes = createHook.sync(hooks.ONE_ROUTE).map((_) => _[0]);

      const { value: layoutTitle } = createHook.waterfall(
        hooks.ONE_LAYOUT_TITLE,
        getConfig("one.layout.title", "OneFront")
      );

      const { value: drawerWidth } = createHook.waterfall(
        hooks.ONE_LAYOUT_DRAWER_WIDTH,
        getConfig("one.layout.drawer.width", 240)
      );

      const { value: drawerDisable } = createHook.waterfall(
        hooks.ONE_LAYOUT_DRAWER_DISABLE,
        getConfig("one.layout.drawer.disable", false)
      );

      const { value: drawerOpen } = createHook.waterfall(
        hooks.ONE_LAYOUT_DRAWER_OPEN,
        getConfig("one.layout.drawer.open", false)
      );

      const primaryListItems = createHook
        .sync(hooks.ONE_LAYOUT_DRAWER_PRIMARY_LIST_ITEMS)
        .map((_) => _[0]);

      const secondaryListItems = createHook
        .sync(hooks.ONE_LAYOUT_DRAWER_SECONDARY_LIST_ITEMS)
        .map((_) => _[0]);

      setContext("one.login.component", LoginComponent);
      setContext("one.loading.component", LoadingComponent);
      setContext("one.layout.routes", layoutRoutes);
      setContext("one.layout.title", layoutTitle);
      setContext("one.layout.drawer.width", drawerWidth);
      setContext("one.layout.drawer.disable", drawerDisable);
      setContext("one.layout.drawer.open", drawerOpen);
      setContext("one.layout.drawer.list.primary.items", primaryListItems);
      setContext("one.layout.drawer.list.secondary.items", secondaryListItems);
    }
  });

  registerAction({
    hook: "$REACT_ROOT_WRAPPER",
    handler: { component: OneAuthProvider }
  });

  registerAction({
    hook: "$REACT_ROOT_WRAPPER",
    handler: { component: OneLayout }
  });
};
