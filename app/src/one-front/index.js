import * as hooks from "./hooks";
import OneAuthProvider from "./containers/OneAuthProvider";
import OneLayout from "./containers/OneLayout";
import { onInitService } from "./lifecycle/init-service";

export { useOneAuth } from "./containers/OneAuthProvider";

export const OneFront = ({ registerHook }) => {
  registerHook(hooks);

  return [
    {
      hook: "$INIT_SERVICE",
      handler: onInitService
    },
    {
      hook: "$REACT_ROOT_WRAPPER",
      handler: { component: OneAuthProvider }
    },
    {
      hook: "$REACT_ROOT_WRAPPER",
      handler: { component: OneLayout }
    }
  ];
};
