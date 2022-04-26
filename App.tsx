import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";

import { AppRoutes } from "./src/routes/app.routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent />
      <AppRoutes />
    </NavigationContainer>
  );
}
