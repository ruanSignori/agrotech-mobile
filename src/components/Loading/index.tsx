import React from "react";
import { ActivityIndicator } from "react-native";

type LoadingProps = {
  color: string;
};

export function Loading({ color }: LoadingProps) {
  return (
    <ActivityIndicator
      color={color}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    />
  );
}
