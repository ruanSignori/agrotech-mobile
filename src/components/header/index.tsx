import React from "react";
import { Text, View } from "react-native";

import { styles } from "./style";

export function header() {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  );
}
