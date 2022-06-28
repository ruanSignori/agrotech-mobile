import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { theme } from "../../styles/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: getStatusBarHeight(),
    paddingBottom: 70,
    justifyContent: "space-between",
  },
  animation: {
    width: 300,
    marginTop: -10,
  },
  heading: {
    alignSelf: "flex-start",
    fontWeight: "bold",
    fontSize: 30,
    color: theme.colors.text,
    marginTop: -60,
    marginBottom: 12,
  },
  text: {
    color: theme.colors.gray,
    fontSize: 16,
    marginVertical: 8,
  },
  signInWith: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  others: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  otherIcons: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  icons: {
    marginRight: 5,
  },
});
