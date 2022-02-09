import * as hooks from "./hooks";
import OneLayout from "./containers/OneLayout/Index"
import { Apollo } from "./apollo-client";

export const OneFront = ({
  registerAction,
  setContext,
  createHook,
  registerHook
}) => {
  
  registerHook(hooks);

  registerAction({
    hook: "$INIT_SERVICE",
    handler: () => {
      const layoutRoutes = createHook.sync(hooks.ONE_ROUTE).map((_) => _[0]);

      setContext("one.layout.routes", layoutRoutes);
    }
  });

  registerAction({
    hook: "$REACT_ROOT_WRAPPER",
    handler: { component: Apollo }
  });

  registerAction({
    hook: "$REACT_ROOT_WRAPPER",
    handler: { 
      component: OneLayout 
    }
  });

/*   registerAction({
    hook: "$ONE_ROUTE",
    handler: { 
      path: '/',
      exact: true,
      element: <OneLayout />
    }
  }); */

  /* registerAction({
    hook: "$INIT_SERVICE",
    handler: () => {
      setContext("one.login.theme", theme);
    }
  }) */
}