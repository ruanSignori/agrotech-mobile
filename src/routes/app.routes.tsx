import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { Home } from "../screens/home";
import { Humidity } from "../screens/humidity";
import { Temperature } from "../screens/temperature";

const Stack = createNativeStackNavigator();

export function AppRoutes(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Humidity" component={Humidity} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Temperature" component={Temperature} />
    </Stack.Navigator>
  );
}
