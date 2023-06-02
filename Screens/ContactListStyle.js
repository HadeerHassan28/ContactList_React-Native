import { Platform, StyleSheet, Text, View } from "react-native";
export const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 30 : 0,
    flex: 1,
    backgroundColor: "black",
  },
  text: {
    padding: 16,
  },
  line: {
    height: 1,
    backgroundColor: "gray",
    marginHorizontal: 10,
  },
  nameArrow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
