import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function Failed(props) {
  return (
    <View style={styles.container}>
      <Icon name="emoji-sad" style={styles.icon}></Icon>
      <Text style={styles.paymentFailed}>PAYMENT FAILED</Text>
      <Image
        source={require("../assets/images/font_41.png")}
        resizeMode="contain"
        style={styles.image1}
      ></Image>
      <Text style={styles.minhTue1}>
        So sorry :( {"\n"}Your payment was failed{"\n"}Please try again
      </Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("CheckoutInfo")}
        style={styles.button1}
      >
        <View style={styles.group1}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Untitled")}
            style={styles.button2}
          >
            <Text style={styles.backToYourCart}>BACK TO YOUR CART</Text>
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
  icon: {
    color: "#df7f68",
    fontSize: 60,
    marginTop: 270,
    alignSelf: "center"
  },
  paymentFailed: {
    fontFamily: "aclonica-regular",
    color: "#121212",
    fontSize: 30,
    marginTop: -236,
    alignSelf: "center"
  },
  image1: {
    width: 247,
    height: 99,
    marginTop: 22,
    alignSelf: "center"
  },
  minhTue1: {
    fontFamily: "adamina-regular",
    color: "#121212",
    height: 96,
    width: 252,
    fontSize: 18,
    lineHeight: 30,
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 125,
    marginLeft: 61
  },
  button1: {
    width: 375,
    height: 92,
    marginTop: 244,
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
  backToYourCart: {
    fontFamily: "aclonica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 27,
    marginLeft: 76
  }
});

export default Failed;
