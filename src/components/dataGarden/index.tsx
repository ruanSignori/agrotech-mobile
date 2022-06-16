import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

type DataGardenProps = {
  dataFirebase: null | number;
};

export function DataGarden({ dataFirebase }: DataGardenProps): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>{dataFirebase}</Text>
      </View>
    </View>
  );
}
