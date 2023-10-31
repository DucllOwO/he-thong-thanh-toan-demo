import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function CheckoutInfo(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.group1}>
        <View style={styles.rect1Stack}>
          <View style={styles.rect1}></View>
          <View style={styles.rect2}></View>
        </View>
      </View>
      <Text style={styles.checkOut1}>CHECK OUT</Text>
      <Image
        source={require("../assets/images/font_41.png")}
        resizeMode="contain"
        style={styles.image1}
      ></Image>
      <View style={styles.group6}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Authen")}
          style={styles.infor}
        >
          <View style={styles.icon1Row}>
            <EvilIconsIcon name="cart" style={styles.icon1}></EvilIconsIcon>
            <Text style={styles.checkOut14}>CHECK OUT</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.shippingAddress}>Shipping Address</Text>
      <View style={styles.textStack}>
        <Text style={styles.text}></Text>
        <Text style={styles.minhTue}>Minh Tue</Text>
      </View>
      <Text style={styles.loremIpsum}>
        KTX Khu B DHQGHCM, Linh Trung, Thu Duc, TPHCM{"\n"}
        {"\n"}0365387747
      </Text>
      <View style={styles.group7}>
        <View style={styles.rect6}>
          <View style={styles.addShippingAdressRow}>
            <Text style={styles.addShippingAdress}>Add shipping adress</Text>
            <FeatherIcon name="plus" style={styles.icon2}></FeatherIcon>
          </View>
        </View>
      </View>
      <Text style={styles.paymentMethod}>Payment Method</Text>
      <View style={styles.estTotal1Row}>
        <Text style={styles.estTotal1}>EST TOTAL</Text>
        <Text style={styles.loremIpsum5}>$ 240</Text>
      </View>
      <View style={styles.group8}>
        <View style={styles.rect7}>
          <View style={styles.tpBankRow}>
            <Text style={styles.tpBank}>TP Bank - Ngan hang Tien Phong</Text>
            <EntypoIcon
              name="chevron-thin-down"
              style={styles.icon4}
            ></EntypoIcon>
          </View>
        </View>
      </View>
      <View style={styles.text2Stack}>
        <Text style={styles.text2}>Dao Minh Tue{"\n"}********384</Text>
        <IoniconsIcon
          name="ios-checkmark-circle"
          style={styles.icon6}
        ></IoniconsIcon>
      </View>
      <View style={styles.rect8}></View>
      <View style={styles.rect9}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  group1: {
    width: 335,
    height: 11,
    marginTop: 135,
    marginLeft: 20
  },
  rect1: {
    width: 335,
    height: 1,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 0.2,
    left: 0,
    top: 3
  },
  rect2: {
    top: 0,
    width: 8,
    height: 8,
    position: "absolute",
    backgroundColor: "rgba(74,74,74,1)",
    transform: [
      {
        rotate: "45.00deg"
      }
    ],
    left: 164
  },
  rect1Stack: {
    width: 335,
    height: 8,
    marginTop: 2
  },
  checkOut1: {
    fontFamily: "aclonica-regular",
    color: "#121212",
    fontSize: 30,
    marginTop: -46,
    marginLeft: 94
  },
  image1: {
    width: 150,
    height: 60,
    marginTop: -111,
    marginLeft: 113
  },
  group6: {
    width: 198,
    height: 43,
    marginTop: 658,
    marginLeft: 88
  },
  infor: {
    width: 375,
    height: 92,
    backgroundColor: "rgba(0,0,0,1)",
    flexDirection: "row",
    marginTop: -20,
    marginLeft: -88
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 43,
    width: 40
  },
  checkOut14: {
    fontFamily: "aclonica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginLeft: 8,
    marginTop: 10
  },
  icon1Row: {
    height: 43,
    flexDirection: "row",
    flex: 1,
    marginRight: 115,
    marginLeft: 88,
    marginTop: 20
  },
  shippingAddress: {
    fontFamily: "adamina-regular",
    color: "#121212",
    letterSpacing: 1,
    marginTop: -623,
    marginLeft: 20
  },
  text: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212"
  },
  minhTue: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "adamina-regular",
    color: "#121212",
    height: 21,
    width: 110,
    fontSize: 18,
    lineHeight: 16,
    letterSpacing: 1
  },
  textStack: {
    width: 110,
    height: 21,
    marginTop: 19,
    marginLeft: 48
  },
  loremIpsum: {
    fontFamily: "adamina-regular",
    color: "rgba(85,85,85,1)",
    height: 81,
    width: 272,
    textAlign: "left",
    lineHeight: 20,
    letterSpacing: 1,
    marginTop: 9,
    marginLeft: 48
  },
  group7: {
    width: 314,
    height: 35,
    marginTop: 20,
    marginLeft: 36
  },
  rect6: {
    width: 314,
    height: 35,
    backgroundColor: "rgba(249,249,249,1)",
    borderRadius: 44,
    flexDirection: "row"
  },
  addShippingAdress: {
    fontFamily: "adamina-regular",
    color: "rgba(74,74,74,1)",
    height: 21,
    width: 161,
    textAlign: "left",
    fontSize: 14,
    letterSpacing: 1
  },
  icon2: {
    color: "rgba(74,74,74,1)",
    fontSize: 20,
    height: 20,
    width: 20,
    marginLeft: 110
  },
  addShippingAdressRow: {
    height: 21,
    flexDirection: "row",
    flex: 1,
    marginRight: 12,
    marginLeft: 11,
    marginTop: 7
  },
  paymentMethod: {
    fontFamily: "adamina-regular",
    color: "#121212",
    letterSpacing: 1,
    marginTop: 22,
    marginLeft: 20
  },
  estTotal1: {
    fontFamily: "adamina-regular",
    color: "#121212",
    letterSpacing: 1,
    marginTop: 1
  },
  loremIpsum5: {
    fontFamily: "adamina-regular",
    color: "#df7f68",
    fontSize: 16,
    marginLeft: 191
  },
  estTotal1Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 273,
    marginLeft: 20,
    marginRight: 25
  },
  group8: {
    width: 314,
    height: 35,
    marginTop: -276,
    alignSelf: "center"
  },
  rect7: {
    width: 314,
    height: 35,
    backgroundColor: "rgba(249,249,249,1)",
    borderRadius: 44,
    flexDirection: "row"
  },
  tpBank: {
    fontFamily: "adamina-regular",
    color: "rgba(74,74,74,1)",
    height: 21,
    width: 274,
    textAlign: "left",
    fontSize: 14,
    letterSpacing: 1
  },
  icon4: {
    color: "rgba(74,74,74,1)",
    fontSize: 20,
    height: 22,
    width: 20
  },
  tpBankRow: {
    height: 22,
    flexDirection: "row",
    flex: 1,
    marginRight: 9,
    marginLeft: 11,
    marginTop: 7
  },
  text2: {
    top: 0,
    position: "absolute",
    fontFamily: "adamina-regular",
    color: "rgba(85,85,85,1)",
    height: 41,
    width: 272,
    textAlign: "left",
    lineHeight: 20,
    letterSpacing: 1,
    left: 0
  },
  icon6: {
    top: 10,
    left: 268,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 20
  },
  text2Stack: {
    width: 284,
    height: 41,
    marginTop: 19,
    marginLeft: 52
  },
  rect8: {
    width: 335,
    height: 1,
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 0.2,
    marginTop: -50,
    marginLeft: 20
  },
  rect9: {
    width: 335,
    height: 1,
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 0.2,
    marginTop: 60,
    marginLeft: 20
  }
});

export default CheckoutInfo;
