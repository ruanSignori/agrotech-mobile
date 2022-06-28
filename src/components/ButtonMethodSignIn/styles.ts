import { StyleSheet } from "react-native";

import { theme } from "../../styles/themes";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 28,
    borderWidth: 2,
    borderColor: theme.colors.gray_secundary,
    borderRadius: 10,
  },
  image: {
    width: 28,
    height: 28,
  },
});
