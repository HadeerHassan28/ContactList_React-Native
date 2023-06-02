import React, { useContext, useState } from "react";
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
  const [searchTerm, setSearchTerm] = useState("");
  const { navigate } = useNavigation();
  // console.warn(state); //? Done
  //const { data } = useContext(DataContext);
  //console.warn(data); //? done

  // const filteredData = data.filter((item) =>
  //   item.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const handleChange = (text) => {
    setSearchTerm(text);
  };

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
          onChangeText={() => handleChange}
          value="Enter a name"
          editable
        />
        <FlatList
          data={data}
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
