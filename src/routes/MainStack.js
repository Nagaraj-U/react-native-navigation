import React from "react";
import TabRoutes from "./TabRoutes";

function MainStack(Stack) {
  return <Stack.Screen name="Tabs" component={TabRoutes} />;
}

export default MainStack;
