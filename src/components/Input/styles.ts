import { StyleSheet } from "react-native";

import { theme } from "../../styles/themes";

export const styles = StyleSheet.create({
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    fontSize: 14,
    borderWidth: 2,
    borderColor: theme.colors.gray,
    marginBottom: 8,
  },
});
