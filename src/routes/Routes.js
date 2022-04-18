import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabRoutes from "./TabRoutes";
import MainStack from "./MainStack";
import Logout from "../screens/Logout";
import DrawerRoutes from "../routes/DrawerRoutes";
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
import ItemDetails from "../screens/ItemDetails";
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {MainStack(Stack)}
    </Stack.Navigator>
  );
};
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {MainStack(Stack)}
        <Stack.Screen
          options={{
            headerShown: true,
          }}
          name="ItemDetails"
          component={ItemDetails}
        ></Stack.Screen>
        <Stack.Screen name="Drawer" component={DrawerRoutes}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
