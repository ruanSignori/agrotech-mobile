import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { theme } from "../../styles/themes";

const heightStatusBar = getStatusBarHeight() + 32;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  heading: {
    alignSelf: "flex-start",
    fontWeight: "bold",
    fontSize: 30,
    color: theme.colors.text,
    marginBottom: 24,
    marginTop: heightStatusBar,
  },
  form: {
    marginTop: 100,
    width: "100%",
  },
  backScreen: {
    flexDirection: "row",
    width: "48%",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 24,
  },
  textButton: {
    fontWeight: "bold",
    color: theme.colors.brand,
    fontSize: 14,
  },
});
