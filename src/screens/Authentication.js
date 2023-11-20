import { Center, HStack, Row, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { globalStyles, height, width } from "../../App";
import Divider from "../assets/images/divider.svg";
import Logo from "../components/Logo";
import BlackPoint from "../assets/images/black-point.svg";
import RoundNumberButton from "../components/RoundNumberButton";
import * as LocalAuthentication from "expo-local-authentication";

function Authentication({ navigation }) {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
      if (compatible) {
        const biometricAuth = await LocalAuthentication.authenticateAsync({
          promptMessage: "Xác thực vân tay",
          disableDeviceFallback: true,
          cancelLabel: "Nhập mã pin",
          requireConfirmation: true,
        });
        if (biometricAuth?.success) {
          navigation.navigate("success");
        } else {
          navigation.navigate("failed");
        }
      }
    })();
  }, []);
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
      <Center marginTop={3}>
        <Text style={styles.textHeader}>NHẬP MÃ PIN</Text>
        <HStack
          width={width * 0.4}
          justifyContent={"space-evenly"}
          marginTop={5}
        >
          <BlackPoint />
          <BlackPoint />
          <BlackPoint />
          <BlackPoint />
        </HStack>
        <VStack w={width * 0.7} height={height * 0.5} marginTop={10} space={10}>
          <Row
            justifyContent={"space-evenly"}
            onTouchEnd={() => navigation.navigate("failed")}
          >
            <RoundNumberButton text="1" />
            <RoundNumberButton text="2" />
            <RoundNumberButton text="3" />
          </Row>
          <Row justifyContent={"space-evenly"}>
            <RoundNumberButton text="4" />
            <RoundNumberButton text="5" />
            <RoundNumberButton text="6" />
          </Row>
          <Row justifyContent={"space-evenly"}>
            <RoundNumberButton text="7" />
            <RoundNumberButton text="8" />
            <RoundNumberButton text="9" />
          </Row>
        </VStack>
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

export default Authentication;
