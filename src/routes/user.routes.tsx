import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { Register } from "../screens/Register";
import { SignIn } from "../screens/SignIn";

const { Screen, Navigator } = createNativeStackNavigator();

export function UserRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="signIn" component={SignIn} />
      <Screen name="register" component={Register} />
    </Navigator>
  );
}
