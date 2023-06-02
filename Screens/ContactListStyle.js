import { Platform, StyleSheet, Text, View } from "react-native";
export const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 30 : 0,
    flex: 1,
    backgroundColor: "black",
  },
  text: {
    paddingVertical: 5,
    textAlignVertical: "center",
  },
  line: {
    height: 1,
    backgroundColor: "gray",
    marginHorizontal: 5,
  },
  nameArrow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  arrow: {
    paddingHorizontal: 300,
    paddingTop: 25,
  },
});
