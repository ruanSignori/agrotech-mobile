/* eslint-disable react/no-unstable-nested-components */
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { ButtonHome } from "../components/ButtonHome";
import { Home } from "../screens/home";
import { Humidity } from "../screens/humidity";
import { Temperature } from "../screens/temperature";

const Tab = createBottomTabNavigator();

export function AppRoutes(): JSX.Element {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#121212",
          borderTopColor: "transparent",
          paddingVertical: 5,
        },
        tabBarActiveTintColor: "#F8FAFC",
      }}
    >
      <Tab.Screen
        name="Humidity"
        component={Humidity}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="percentage" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <ButtonHome size={size} color={color} focused={focused} />
          ),
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Temperature"
        component={Temperature}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="temperature-low" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// uninstall @react/native-stack
