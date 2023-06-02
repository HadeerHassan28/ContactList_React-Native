import React, { useContext, useState } from "react";
import { SafeAreaView, View } from "react-native";
import { DataContext } from "../Context/DataContextProvider";
import { styles } from "./ContactListStyle";
import {
  Box,
  Text,
  ArrowForwardIcon,
  VStack,
  FlatList,
  useBreakpointValue,
  NativeBaseProvider,
  Pressable,
  Input,
} from "native-base";
import { useNavigation } from "@react-navigation/native";

// const Arrow = () => {
//   const cols = useBreakpointValue({
//     base: 3,
//     sm: 4,
//     md: 8,
//   });
//   const icons = [
//     {
//       icon: <ArrowForwardIcon />,
//       iconName: "arrow-forward",
//     },
//   ];
//   return (
//     <Box w="1000%">
//       <FlatList
//         data={icons}
//         renderItem={({ item }) => (
//           <VStack
//             py="2"
//             flex={1}
//             space={3}
//             my={3}
//             mx={2}
//             boxSize="76"
//             alignItems="center"
//             justifyContent="flex-end"
//           >
//             <Pressable onPress={handleDetail}>
//               <Box
//                 _text={{
//                   textAlign: "",
//                 }}
//               >
//                 {item.icon}
//               </Box>
//             </Pressable>
//             <Text textAlign="center">{item.iconName}</Text>
//           </VStack>
//         )}
//         keyExtractor={(item) => item.iconName}
//         numColumns={cols}
//       />
//     </Box>
//   );
// };
const ContactList = () => {
  const { state } = useContext(DataContext);
  const { data } = state;
  const [searchTerm, setSearchTerm] = useState("");
  // console.warn(state); //? Done
  //console.warn(data); //? done
  //const { data } = useContext(DataContext);
  //console.warn(data); //? done
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(item.toLowerCase())
  );
  const handleChange = (text) => {
    setSearchTerm(text);
  };
  const navigation = useNavigation();
  const handleDetail = () => {
    navigation.navigate("Detail");
  };
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Text fontSize="4xl" bold color={"#ff1493"} style={styles.title}>
          My Contacts
        </Text>
        <Input
          variant="underlined"
          placeholder="Enter a name"
          color={"#C0C0C0"}
          size="2xl"
          onChangeText={handleChange}
        />
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <View style={styles.nameArrow}>
              <Text fontSize="2xl" color={"#C0C0C0"} style={styles.text}>
                {item.name}
              </Text>
            </View>
          )}
          ItemSeparatorComponent={<View style={styles.line}></View>}
        ></FlatList>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default ContactList;
