import { Box, Center } from "native-base";
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { globalStyles, height, width } from "../../App";
import Divider from "../assets/images/divider.svg";
import Logo from "../components/Logo";
import SuccessIcon from "../assets/images/success-icon.svg";
import DoubleArrowDown from "../assets/images/double-arrow-down.svg";

function Success({ navigation }) {
  return (
    <SafeAreaView
      style={{
        ...globalStyles.AndroidSafeArea,
        paddingLeft: 3,
        paddingRight: 3,
        height: height,
      }}
    >
      <Center w={width}>
        <Center>
          <Logo />
          <Text style={styles.textTitle}>THANH TOÁN</Text>
          <Divider />
        </Center>
        <Center marginTop={8} width={width * 0.8}>
          <Text style={styles.textHeader}>
            HÓA ĐƠN CỦA BẠN ĐÃ ĐƯỢC THANH TOÁN THÀNH CÔNG
          </Text>
          <Box marginTop={8}>
            <SuccessIcon />
          </Box>
          <Box marginTop={8}>
            <Text style={styles.textHeader}>
              CẢM ƠN BẠN ĐÃ MUA HÀNG Ở HADUM
            </Text>
          </Box>
          <Box marginTop={8}>
            <Text style={styles.textDescrpition}>MÃ ĐƠN HÀNG: #231</Text>
          </Box>
        </Center>
      </Center>
      <Center w={width} marginBottom={5} position={"absolute"} bottom={0}>
        <Text style={styles.textDescrpition}>VUI LÒNG KIỂM TRA HÓA ĐƠN</Text>
        <Box marginTop={3}>
          <DoubleArrowDown />
        </Box>
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
    fontSize: 30,
    marginTop: 5,
  },
  textHeader: {
    fontFamily: "josefinsans-medium",
    color: "#DD8560",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  textDescrpition: {
    fontFamily: "josefinsans-medium",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
  },
});

export default Success;
