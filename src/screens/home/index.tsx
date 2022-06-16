import React from "react";
import { LogBox, Text, View } from "react-native";

import { useAuth } from "../../hooks/useAuth";
import { styles } from "./styles";

LogBox.ignoreLogs(["Setting a timer"]);

export function Home(): JSX.Element {
  const { user } = useAuth();
  return (
    <View style={styles.container}>
      <Text>oPA</Text>
    </View>
  );
}
