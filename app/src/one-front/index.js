import OneLayout from "./containers/OneLayout/Index"


export const OneFront = ({
  registerAction,
  setContext
}) => {
  
  registerAction({
    hook: "$REACT_ROOT_WRAPPER",
    handler: { 
      component: OneLayout 
    }
  });

  /* registerAction({
    hook: "$INIT_SERVICE",
    handler: () => {
      setContext("one.login.theme", theme);
    }
  }) */
}