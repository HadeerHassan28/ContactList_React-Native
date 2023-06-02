import React, { useContext } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { DataContext } from "../Context/DataContextProvider";
import { styles } from "./ContactListStyle";
import { Text, NativeBaseProvider } from "native-base";
const ContactList = () => {
  const { state } = useContext(DataContext);
  const { data } = state;
  // console.warn(state); //? Done
  //console.warn(data); //? done
  //const { data } = useContext(DataContext);
  //console.warn(data); //? done

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          ListHeaderComponent={
            <Text fontSize="4xl" bold color={"#ff1493"} style={styles.title}>
              My Contacts
            </Text>
          }
          renderItem={({ item }) => (
            <Text fontSize="2xl" color={"#C0C0C0"} style={styles.text}>
              {item.name}
            </Text>
          )}
          ItemSeparatorComponent={<View style={styles.line}></View>}
        ></FlatList>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default ContactList;
