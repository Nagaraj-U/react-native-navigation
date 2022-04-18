import React from "react";
import Settings from "../screens/Settings";
import EditSettings from "../screens/EditSettings";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
function SettingsStack() {
  return (
    <Stack.Navigator
    // screenOptions={{
    //   headerShown: false,
    // }}
    >
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name="EditSettings"
        component={EditSettings}
      />
    </Stack.Navigator>
  );
}

export default SettingsStack;
