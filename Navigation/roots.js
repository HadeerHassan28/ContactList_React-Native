import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, StyleSheet } from "react-native";
import routes from "../common/routes";
import ContactList from "../Screens/ContactList";
import Detail from "../Screens/Detail";
const stack = createNativeStackNavigator();

const Root = () => {
  return (
    <stack.Navigator>
      <stack.Screen name={routes.ContactList} component={ContactList} />
      <stack.Screen name={routes.Detail} component={Detail} />
    </stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
});

export default Root;
