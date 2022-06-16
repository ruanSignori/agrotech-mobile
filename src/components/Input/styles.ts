import { StyleSheet } from "react-native";

import { theme } from "../../styles/themes";

export const styles = StyleSheet.create({
  input: {
    width: "100%",
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: theme.colors.gray,
    padding: 12,
    borderRadius: 12,
    fontSize: 14,
    marginBottom: 15,
  },
});
