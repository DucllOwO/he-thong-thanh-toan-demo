import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Sucess(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/font_41.png")}
        resizeMode="contain"
        style={styles.image1}
      ></Image>
      <Text style={styles.paymentSuccess}>PAYMENT SUCCESS</Text>
      <Icon name="checkbox-marked-circle-outline" style={styles.icon}></Icon>
      <Text style={styles.minhTue1}>
        Your payment was success{"\n"}Order ID: 20520521
      </Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Untitled")}
        style={styles.button1}
      >
        <View style={styles.group1}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Untitled")}
            style={styles.button2}
          >
            <Text style={styles.backToHome}>BACK TO HOME</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image1: {
    width: 247,
    height: 99,
    marginTop: 156,
    alignSelf: "center"
  },
  paymentSuccess: {
    fontFamily: "aclonica-regular",
    color: "#121212",
    fontSize: 30,
    marginTop: -155,
    alignSelf: "center"
  },
  icon: {
    color: "rgba(223,127,104,1)",
    fontSize: 60,
    marginTop: 142,
    marginLeft: 158
  },
  minhTue1: {
    fontFamily: "adamina-regular",
    color: "#121212",
    height: 73,
    width: 252,
    fontSize: 18,
    lineHeight: 30,
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 48,
    alignSelf: "center"
  },
  button1: {
    width: 375,
    height: 92,
    marginTop: 257,
    alignSelf: "center"
  },
  group1: {
    width: 375,
    height: 92
  },
  button2: {
    width: 375,
    height: 92,
    backgroundColor: "rgba(0,0,0,1)"
  },
  backToHome: {
    fontFamily: "aclonica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 31,
    marginLeft: 105
  }
});

export default Sucess;
