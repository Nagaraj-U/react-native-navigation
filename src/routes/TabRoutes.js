import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Details from "../screens/Details";
import iconsPath from "../constants/iconsPath";
import { Image } from "react-native";
import SettingsStack from "./SettingsStack";
import DrawerRoutes from "./DrawerRoutes";
const Tab = createBottomTabNavigator();
const TabRoutes = (Stack) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "blue",
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: (props) => {
            return (
              <Image
                style={{ tintColor: props.focused ? "red" : "black" }}
                source={iconsPath.iconHome}
              />
            );
          },
          headerShown: false,
        }}
        name="Home"
        component={DrawerRoutes} //drawer routes are nested inside tab routes "home" screen
      />
      <Tab.Screen
        options={{
          tabBarIcon: (props) => {
            return (
              <Image
                style={{ tintColor: props.focused ? "red" : "black" }}
                source={iconsPath.infoIcon}
              />
            );
          },
        }}
        name="Details"
        component={Details}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (props) => {
            return (
              <Image
                style={{ tintColor: props.focused ? "red" : "black" }}
                source={iconsPath.settingsIcon}
              />
            );
          },
          headerShown: false,
        }}
        name="Settings"
        component={SettingsStack} //nested stack navigation (settings <-> edit settings),
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
