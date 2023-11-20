import { Box, Center, Text as TextNB } from "native-base";
import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { globalStyles, height, width } from "../../App";
import Divider from "../assets/images/divider.svg";
import Logo from "../components/Logo";
import FailedIcon from "../assets/images/fail-icon.svg";

function Failed({ navigation }) {
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
          <Text style={styles.textHeader}>RẤT TIÊC THANH TOÁN ĐÃ THẤT BẠI</Text>
          <Box marginTop={8}>
            <FailedIcon />
          </Box>
          <Box marginTop={8}>
            <Text style={styles.textDescrpition}>
              VUI LÒNG THỬ LẠI HOẶC LIÊN HỆ VỚI CHUYÊN VIÊN
            </Text>
          </Box>
        </Center>
      </Center>
      <TouchableOpacity style={styles.retryButton}>
        <Center flexDirection={"row"} h={"100%"}>
          <TextNB
            fontSize={24}
            color={"white"}
            fontWeight={"bold"}
            style={globalStyles.textButton}
          >
            THỬ LẠI
          </TextNB>
        </Center>
      </TouchableOpacity>
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
  retryButton: {
    backgroundColor: "black",
    width: "105%",
    height: 70,
    position: "absolute",
    bottom: 0,
  },
});

export default Failed;
