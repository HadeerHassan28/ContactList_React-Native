import React, { useContext } from "react";
import { View, Text, FlatList } from "react-native";
import { DataContext } from "../Context/DataContextProvider";
import { styles } from "./ContactListStyle";

const ContactList = () => {
  const { data } = useContext(DataContext);
  //console.warn(data); //? done

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      ></FlatList>
    </View>
  );
};
export default ContactList;
