import { Platform, StyleSheet, Text, View } from "react-native";
export const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 30 : 0,
    flex: 1,
  },
});
