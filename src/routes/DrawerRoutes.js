import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabRoutes from "./TabRoutes";
const Drawer = createDrawerNavigator();
import Logout from "../screens/Logout";
import Home from "../screens/Home";
function DrawerRoutes(props) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home}></Drawer.Screen>
      <Drawer.Screen name="Logout" component={Logout}></Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default DrawerRoutes;
