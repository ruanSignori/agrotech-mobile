import { StyleSheet } from "react-native";

import { theme } from "../../styles/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  subTitle: {
    color: theme.colors.gray,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: -60,
    marginBottom: 10,
  },
});
