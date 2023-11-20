import {
  Box,
  Center,
  HStack,
  Input,
  Text as TextNB,
  VStack,
} from "native-base";
import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { globalStyles, height, width } from "../../App";
import Divider from "../assets/images/divider.svg";
import Logo from "../components/Logo";
import { cardData } from "../assets/data/dummyData";

function CardInformation({ navigation }) {
  return (
    <SafeAreaView
      style={{
        ...globalStyles.AndroidSafeArea,
        paddingLeft: 3,
        paddingRight: 3,
        height: height,
      }}
    >
      <Center>
        <Logo />
        <Text style={styles.textTitle}>THANH TOÁN</Text>
        <Divider />
      </Center>
      <VStack marginTop={3} paddingLeft={3} paddingRight={3}>
        <Text style={styles.textHeader}>Thông tin thanh toán</Text>
        <Input
          marginTop={3}
          variant="outline"
          placeholder="Ngân hàng"
          value={cardData.bank}
          showSoftInputOnFocus={false}
        />
        <Input
          marginTop={3}
          variant="outline"
          placeholder="Số tài khoản"
          value={cardData.cardNumber}
          showSoftInputOnFocus={false}
        />
        <Input
          marginTop={3}
          variant="outline"
          placeholder="Tên tài khoản"
          value={cardData.cardName}
          showSoftInputOnFocus={false}
        />
        <Input
          marginTop={3}
          variant="outline"
          value="đ 810 000"
          isDisabled={true}
          showSoftInputOnFocus={false}
        />
        <Input
          marginTop={3}
          variant="outline"
          value="Thanh toán HADUM đơn hàng #231"
          showSoftInputOnFocus={false}
        />
      </VStack>
      <Box
        display={"flex"}
        flexDirection={"row"}
        width={width}
        position={"absolute"}
        bottom={0}
      >
        <TouchableOpacity
          style={{ ...styles.insertButton, backgroundColor: "#4A4A4A33" }}
          onPress={() => navigation.navigate("insertCard")}
        >
          <Center height={"100%"} w={"100%"}>
            <Text style={{ ...styles.textButton, color: "black" }}>Hủy</Text>
          </Center>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.insertButton, backgroundColor: "black" }}
          onPress={() => navigation.navigate("auth")}
        >
          <Center height={"100%"} w={"100%"}>
            <Text style={styles.textButton}>Tiếp tục</Text>
          </Center>
        </TouchableOpacity>
      </Box>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textTotalAmount: {
    fontFamily: "itim",
    fontSize: 18,
    fontWeight: "400",
  },
  textTitle: {
    fontFamily: "itim",
    color: "#121212",
    fontSize: 30,
    marginTop: 5,
  },
  textHeader: {
    fontFamily: "itim",
    color: "#121212",
    marginLeft: 16,
    fontSize: 18,
    fontWeight: "700",
  },
  input: {
    marginTop: 3,
  },
  insertButton: {
    flex: 1,
    height: 50,
    alignContent: "center",
  },
  textButton: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "itim",
    color: "white",
  },
});

export default CardInformation;
