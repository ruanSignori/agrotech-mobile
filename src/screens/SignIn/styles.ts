import { StyleSheet } from "react-native";

import { theme } from "../../styles/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  animation: {
    width: 300,
  },
  heading: {
    alignSelf: "flex-start",
    fontWeight: "bold",
    fontSize: 30,
    color: theme.colors.text,
    marginTop: -60,
    marginBottom: 15,
  },
  text: {
    marginTop: 10,
    color: theme.colors.gray,
    fontSize: 16,
  },
  signInWith: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  others: {
    marginTop: 30,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  otherIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  icons: {
    marginRight: 5,
  },
});
