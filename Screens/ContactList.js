import React, { useContext, useState, useEffect } from "react";
import { SafeAreaView, View } from "react-native";
import { DataContext } from "../Context/DataContextProvider";
import { styles } from "./ContactListStyle";
import {
  Text,
  ArrowForwardIcon,
  FlatList,
  NativeBaseProvider,
  Pressable,
  Input,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import routes from "../common/routes";

const ContactList = () => {
  const { state } = useContext(DataContext);
  const { data } = state;
  const { navigate } = useNavigation();
  const [inputName, setInputName] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  // console.warn(state); //? Done
  //const { data } = useContext(DataContext);
  //console.warn(data); //? done

  const handleChange = (text) => {
    setInputName(text);
  };

  useEffect(() => {
    const filteredContacts = data.filter((item) =>
      item.name.toLowerCase().includes(inputName.toLowerCase())
    );
    // console.warn(filteredContacts);
    setFilteredData(filteredContacts);
  }, [inputName, data]);

  //console.warn(filteredData);
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Text fontSize="4xl" bold color={"#ff1493"} style={styles.title}>
          My Contacts
        </Text>
        <Input
          variant="underlined"
          color={"#C0C0C0"}
          size="2xl"
          onChangeText={handleChange}
          value={inputName}
          editable
          placeholder="Enter a name"
        />
        <FlatList
          data={filteredData}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <View style={styles.nameArrow}>
              <Pressable onPress={() => navigate(routes.Detail, item)}>
                <Text fontSize="2xl" color={"#C0C0C0"} style={styles.text}>
                  {item.name}
                  <ArrowForwardIcon style={styles.arrow}></ArrowForwardIcon>
                </Text>
              </Pressable>
            </View>
          )}
          ItemSeparatorComponent={<View style={styles.line}></View>}
        ></FlatList>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default ContactList;
