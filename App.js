import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ContactList from "./Screens/ContactList";
import DataContextProvider from "./Context/DataContextProvider";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./Navigation/roots";
export default function App() {
  return (
    <DataContextProvider>
      <NavigationContainer>
        <Root></Root>
      </NavigationContainer>
    </DataContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
