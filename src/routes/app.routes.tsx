/* eslint-disable react/no-unstable-nested-components */
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useState } from "react";

import { AuthContextProvider } from "../contexts/AuthContext";
import { useAuth } from "../hooks/useAuth";
import { CreateAccount } from "../screens/createAccount";
import { Home } from "../screens/home";
import { Humidity } from "../screens/humidity";
import { Temperature } from "../screens/temperature";

const Tab = createBottomTabNavigator();

export function AppRoutes(): JSX.Element {
  const { user } = useAuth();
  console.log(` rota1 ${user}`);
  return (
    <AuthContextProvider>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#121212",
            borderTopColor: "transparent",
            paddingVertical: 5,
          },
          tabBarActiveTintColor: "#34D399",
        }}
      >
        {!user?.id && (
          <Tab.Screen name="Create account" component={CreateAccount} />
        )}

        {user?.id && (
          <>
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarIcon: ({ size, color }) => (
                  <Ionicons name="home" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Humidade"
              component={Humidity}
              options={{
                tabBarIcon: ({ size, color }) => (
                  <Ionicons name="water-outline" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Temperatura"
              component={Temperature}
              options={{
                tabBarIcon: ({ size, color }) => (
                  <FontAwesome5
                    name="temperature-low"
                    size={size}
                    color={color}
                  />
                ),
              }}
            />
          </>
        )}
      </Tab.Navigator>
    </AuthContextProvider>
  );
}
