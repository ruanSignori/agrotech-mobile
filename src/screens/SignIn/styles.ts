import { StyleSheet } from "react-native";

import { theme } from "../../styles/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  animation: {
    width: 325,
    marginTop: -10,
  },
  subTitle: {
    color: theme.colors.gray,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: -60,
    marginBottom: 10,
  },
  heading: {
    alignSelf: "flex-start",
    fontWeight: "bold",
    fontSize: 30,
    color: theme.colors.text,
    marginBottom: 24,
  },
  others: {
    marginTop: 24,
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
