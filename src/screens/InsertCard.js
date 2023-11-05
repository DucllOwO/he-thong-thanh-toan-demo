import { Box, Center, Input, Text as TextNB, VStack } from "native-base";
import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { globalStyles, height, width } from "../../App";
import Divider from "../assets/images/divider.svg";
import Logo from "../components/Logo";
import DoubleArrow from "../assets/images/double-arrow.svg";
import Card from "../assets/images/card.svg";

function InsertCard({ navigation }) {
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
      <VStack paddingLeft={3} paddingRight={3}>
        <Text style={styles.textHeader}>Thông tin thanh toán</Text>
        <Input
          marginTop={3}
          variant="outline"
          placeholder="Ngân hàng"
          showSoftInputOnFocus={false}
        />
        <Input
          marginTop={3}
          variant="outline"
          placeholder="Số tài khoản"
          showSoftInputOnFocus={false}
        />
        <Input
          marginTop={3}
          variant="outline"
          placeholder="Tên tài khoản"
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
      <Center>
        <TouchableOpacity
          style={styles.insertButton}
          onPress={() => navigation.navigate("cardInformation")}
        >
          <Center flexDirection={"column"}>
            <TextNB fontSize={24} fontWeight={"bold"} marginBottom={3}>
              Chèn thẻ của bạn
            </TextNB>
            <Box marginBottom={3}>
              <DoubleArrow />
            </Box>
            <Box marginBottom={3}>
              <Card />
            </Box>
          </Center>
        </TouchableOpacity>
      </Center>
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
    marginTop: 30,
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
    width: width,
    position: "relative",
    bottom: 0,
    margin: "15%",
  },
});

export default InsertCard;
