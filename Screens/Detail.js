import useAxios from "axios-hooks";
import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Detail = ({ route }) => {
  const { name, email, phone } = route.params;
  //console.warn(name);
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Contact Info</Text>
      <Text style={styles.text}> Name: {name}</Text>
      <Text style={styles.text}> E-mail: {email}</Text>
      <Text style={styles.text}> Phone: {phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#ff1493",
    paddingBottom: 30,
  },
  text: {
    fontSize: 30,

    color: "#C0C0C0",
    paddingBottom: 30,
  },
});

export default Detail;
