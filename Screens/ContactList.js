import React, { useContext } from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { DataContext } from "../Context/DataContextProvider";
import { styles } from "./ContactListStyle";

const ContactList = () => {
  const { state, dispatch } = useContext(DataContext);
  const { data } = state;
  //console.warn(state); //? Done
  //console.warn(data); //? done
  //const { data } = useContext(DataContext);
  //console.warn(data); //? done

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={<Text>My Contacts</Text>}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      ></FlatList>
    </SafeAreaView>
  );
};
export default ContactList;
