import { Box, Center, ScrollView, Text as TextNB } from "native-base";
import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { ItemCart } from "../components/ItemCart";
import { clothes } from "../assets/data/dummyData";
import { globalStyles, height } from "../../App";
import Divider from "../assets/images/divider.svg";
import Logo from "../components/Logo";

function Checkout({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.AndroidSafeArea}>
      <Center>
        <Logo />
        <Text style={styles.textTitle}>THANH TOÁN</Text>
        <Divider />
      </Center>
      <ScrollView marginTop={5} maxHeight={height * 0.5}>
        <ItemCart {...clothes[0]}></ItemCart>
        <ItemCart {...clothes[1]}></ItemCart>
        <ItemCart {...clothes[2]}></ItemCart>
      </ScrollView>
      <Center>
        <Divider />
      </Center>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        paddingLeft={5}
        paddingRight={5}
      >
        <Text style={styles.textTotalAmount}>Tổng cộng:</Text>
        <Text></Text>
        <Text style={{ ...styles.textTotalAmount, color: "#DD8560" }}>
          đ 810 000
        </Text>
      </Box>
      <TouchableOpacity
        style={styles.buyButton}
        onPress={() => navigation.navigate("insertCard")}
      >
        <Center flexDirection={"row"} h={"100%"}>
          <TextNB
            fontSize={24}
            color={"white"}
            fontWeight={"bold"}
            style={globalStyles.textButton}
          >
            THANH TOÁN
          </TextNB>
        </Center>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    fontSize: 30,
  },
  buyButton: {
    backgroundColor: "black",
    width: "100%",
    height: 70,
    position: "absolute",
    bottom: 0,
  },
});

export default Checkout;
