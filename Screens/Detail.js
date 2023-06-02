import useAxios from "axios-hooks";
import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Detail = ({ route }) => {
  const { name } = route.params;
  console.warn(name);
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Detail;
