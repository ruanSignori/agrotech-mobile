import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";

import { useAuth } from "../hooks/useAuth";
import { StackRoutes } from "./stack.routes";
import { UserRoutes } from "./user.routes";

export function Routes() {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user ? <StackRoutes /> : <UserRoutes />}
    </NavigationContainer>
  );
}
