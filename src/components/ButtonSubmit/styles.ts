import { StyleSheet } from "react-native";

import { theme } from "../../styles/themes";

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "100%",
    backgroundColor: theme.colors.brand,
    padding: 12,
    borderRadius: 12,
  },
  title: {
    color: theme.colors.brand_scundary,
    fontWeight: "bold",
    fontSize: 16,
  },
});
