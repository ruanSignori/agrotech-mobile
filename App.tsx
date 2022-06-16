import React from "react";
import { StatusBar } from "react-native";

import { AuthContextProvider } from "./src/contexts/AuthContext";
import { Routes } from "./src/routes/index.routes";

export default function App() {
  return (
    <AuthContextProvider>
      <StatusBar translucent />
      <Routes />
    </AuthContextProvider>
  );
}
