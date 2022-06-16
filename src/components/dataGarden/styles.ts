import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

const innerHeight = getStatusBarHeight() + 17;

export const styles = StyleSheet.create({
  container: {
    width: 100,
    marginTop: 0,
    paddingTop: innerHeight,
  },
  header: {
    width: "100%",
    height: "60%",
    backgroundColor: "green",
  },
});
