import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, Image } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Svg, { Ellipse } from "react-native-svg";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Authen(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.group1StackStack}>
        <View style={styles.group1Stack}>
          <View style={styles.group1}>
            <View style={styles.rect1Stack}>
              <View style={styles.rect1}></View>
              <View style={styles.rect2}></View>
            </View>
          </View>
          <View style={styles.rect3}>
            <View style={styles.group14}>
              <View style={styles.rect6}>
                <Text style={styles.usePinCode}>Use PIN Code</Text>
              </View>
            </View>
            <Text style={styles.or9}>OR</Text>
            <Text style={styles.useFingerPrint}>Use FingerPrint</Text>
            <MaterialCommunityIconsIcon
              name="fingerprint"
              style={styles.icon15}
            ></MaterialCommunityIconsIcon>
          </View>
        </View>
        <Image
          source={require("../assets/images/font_41.png")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
        <Text style={styles.text}></Text>
        <Text style={styles.loremIpsum6}></Text>
        <Text style={styles.checkOut12}>CHECK OUT</Text>
        <View style={styles.group2}>
          <View style={styles.ellipseStack}>
            <Svg viewBox="0 0 63.32 63.32" style={styles.ellipse}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(230, 230, 230,1)"
                cx={32}
                cy={32}
                rx={32}
                ry={32}
              ></Ellipse>
            </Svg>
            <MaterialCommunityIconsIcon
              name="numeric-1"
              style={styles.icon10}
            ></MaterialCommunityIconsIcon>
          </View>
        </View>
        <View style={styles.group13}>
          <Text style={styles.enterPin}>ENTER PIN</Text>
          <View style={styles.group12}>
            <EntypoIcon
              name="controller-record"
              style={styles.icon11}
            ></EntypoIcon>
            <EntypoIcon
              name="controller-record"
              style={styles.icon12}
            ></EntypoIcon>
            <EntypoIcon
              name="controller-record"
              style={styles.icon13}
            ></EntypoIcon>
            <EntypoIcon
              name="controller-record"
              style={styles.icon14}
            ></EntypoIcon>
          </View>
        </View>
        <View style={styles.group3}>
          <View style={styles.ellipse2Stack}>
            <Svg viewBox="0 0 63.32 63.32" style={styles.ellipse2}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(230, 230, 230,1)"
                cx={32}
                cy={32}
                rx={32}
                ry={32}
              ></Ellipse>
            </Svg>
            <MaterialCommunityIconsIcon
              name="numeric-2"
              style={styles.icon2}
            ></MaterialCommunityIconsIcon>
          </View>
        </View>
        <View style={styles.group4}>
          <View style={styles.ellipse3Stack}>
            <Svg viewBox="0 0 63.32 63.32" style={styles.ellipse3}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(230, 230, 230,1)"
                cx={32}
                cy={32}
                rx={32}
                ry={32}
              ></Ellipse>
            </Svg>
            <MaterialCommunityIconsIcon
              name="numeric-3"
              style={styles.icon3}
            ></MaterialCommunityIconsIcon>
          </View>
        </View>
        <View style={styles.group5}>
          <View style={styles.ellipse4Stack}>
            <Svg viewBox="0 0 63.32 63.32" style={styles.ellipse4}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(230, 230, 230,1)"
                cx={32}
                cy={32}
                rx={32}
                ry={32}
              ></Ellipse>
            </Svg>
            <MaterialCommunityIconsIcon
              name="numeric-6"
              style={styles.icon6}
            ></MaterialCommunityIconsIcon>
          </View>
        </View>
        <View style={styles.group6}>
          <View style={styles.ellipse5Stack}>
            <Svg viewBox="0 0 63.32 63.32" style={styles.ellipse5}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(230, 230, 230,1)"
                cx={32}
                cy={32}
                rx={32}
                ry={32}
              ></Ellipse>
            </Svg>
            <MaterialCommunityIconsIcon
              name="numeric-5"
              style={styles.icon5}
            ></MaterialCommunityIconsIcon>
          </View>
        </View>
        <View style={styles.group11}>
          <View style={styles.ellipse6Stack}>
            <Svg viewBox="0 0 63.32 63.32" style={styles.ellipse6}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(230, 230, 230,1)"
                cx={32}
                cy={32}
                rx={32}
                ry={32}
              ></Ellipse>
            </Svg>
            <MaterialCommunityIconsIcon
              name="numeric-4"
              style={styles.icon4}
            ></MaterialCommunityIconsIcon>
          </View>
        </View>
        <View style={styles.group8}>
          <View style={styles.ellipse7Stack}>
            <Svg viewBox="0 0 63.32 63.32" style={styles.ellipse7}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(230, 230, 230,1)"
                cx={32}
                cy={32}
                rx={32}
                ry={32}
              ></Ellipse>
            </Svg>
            <MaterialCommunityIconsIcon
              name="numeric-7"
              style={styles.icon7}
            ></MaterialCommunityIconsIcon>
          </View>
        </View>
        <View style={styles.group9}>
          <View style={styles.ellipse8Stack}>
            <Svg viewBox="0 0 63.32 63.32" style={styles.ellipse8}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(230, 230, 230,1)"
                cx={32}
                cy={32}
                rx={32}
                ry={32}
              ></Ellipse>
            </Svg>
            <MaterialCommunityIconsIcon
              name="numeric-8"
              style={styles.icon8}
            ></MaterialCommunityIconsIcon>
          </View>
        </View>
        <View style={styles.group10}>
          <View style={styles.ellipse9Stack}>
            <Svg viewBox="0 0 63.32 63.32" style={styles.ellipse9}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(230, 230, 230,1)"
                cx={32}
                cy={32}
                rx={32}
                ry={32}
              ></Ellipse>
            </Svg>
            <MaterialCommunityIconsIcon
              name="numeric-9"
              style={styles.icon9}
            ></MaterialCommunityIconsIcon>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  group1: {
    top: 135,
    left: 20,
    width: 335,
    height: 11,
    position: "absolute"
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
  rect3: {
    top: 0,
    left: 0,
    width: 375,
    height: 812,
    position: "absolute",
    backgroundColor: "rgba(10,7,7,0.86)"
  },
  group14: {
    width: 250,
    height: 50,
    marginTop: 450,
    marginLeft: 70
  },
  rect6: {
    width: 250,
    height: 50,
    backgroundColor: "#E6E6E6",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 20
  },
  usePinCode: {
    fontFamily: "adamina-regular",
    color: "#121212",
    fontSize: 18,
    marginTop: 13,
    marginLeft: 65
  },
  or9: {
    fontFamily: "adamina-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 35,
    marginLeft: 180
  },
  useFingerPrint: {
    fontFamily: "adamina-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 40,
    marginLeft: 121
  },
  icon15: {
    color: "rgba(254,253,253,1)",
    fontSize: 100,
    height: 110,
    width: 100,
    marginTop: 20,
    marginLeft: 138
  },
  group1Stack: {
    top: 0,
    left: 0,
    width: 375,
    height: 812,
    position: "absolute"
  },
  image1: {
    top: 23,
    left: 113,
    width: 150,
    height: 60,
    position: "absolute"
  },
  text: {
    top: 199,
    left: 48,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212"
  },
  loremIpsum6: {
    top: 776,
    left: 83,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  checkOut12: {
    top: 100,
    left: 94,
    position: "absolute",
    fontFamily: "aclonica-regular",
    color: "#121212",
    fontSize: 30
  },
  group2: {
    top: 292,
    left: 60,
    width: 63,
    height: 63,
    position: "absolute"
  },
  ellipse: {
    left: 0,
    width: 63,
    height: 63,
    position: "absolute",
    bottom: 0
  },
  icon10: {
    top: 5,
    left: 7,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 50,
    bottom: 4
  },
  ellipseStack: {
    width: 63,
    flex: 1
  },
  group13: {
    top: 180,
    left: 110,
    width: 156,
    height: 80,
    position: "absolute"
  },
  enterPin: {
    fontFamily: "adamina-regular",
    color: "#121212",
    letterSpacing: 1,
    fontSize: 25
  },
  group12: {
    width: 113,
    height: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginLeft: 22
  },
  icon11: {
    color: "rgba(128,128,128,1)",
    fontSize: 20
  },
  icon12: {
    color: "rgba(128,128,128,1)",
    fontSize: 20
  },
  icon13: {
    color: "rgba(128,128,128,1)",
    fontSize: 20
  },
  icon14: {
    color: "rgba(128,128,128,1)",
    fontSize: 20
  },
  group3: {
    top: 292,
    left: 155,
    width: 63,
    height: 63,
    position: "absolute"
  },
  ellipse2: {
    left: 0,
    width: 63,
    height: 63,
    position: "absolute",
    bottom: 0
  },
  icon2: {
    top: 5,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 50,
    left: 7
  },
  ellipse2Stack: {
    width: 63,
    height: 63
  },
  group4: {
    top: 292,
    left: 248,
    width: 63,
    height: 63,
    position: "absolute"
  },
  ellipse3: {
    left: 0,
    width: 63,
    height: 63,
    position: "absolute",
    bottom: 0
  },
  icon3: {
    top: 5,
    left: 7,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 50
  },
  ellipse3Stack: {
    width: 63,
    height: 63
  },
  group5: {
    top: 374,
    left: 248,
    width: 63,
    height: 63,
    position: "absolute"
  },
  ellipse4: {
    left: 0,
    width: 63,
    height: 63,
    position: "absolute",
    bottom: 0
  },
  icon6: {
    top: 5,
    left: 7,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 50
  },
  ellipse4Stack: {
    width: 63,
    height: 63
  },
  group6: {
    top: 374,
    left: 155,
    width: 63,
    height: 63,
    position: "absolute",
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  ellipse5: {
    left: 0,
    width: 63,
    height: 63,
    position: "absolute",
    bottom: 0
  },
  icon5: {
    top: 5,
    left: 7,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 50
  },
  ellipse5Stack: {
    width: 63,
    height: 63
  },
  group11: {
    top: 374,
    left: 60,
    width: 63,
    height: 63,
    position: "absolute"
  },
  ellipse6: {
    left: 0,
    width: 63,
    height: 63,
    position: "absolute",
    bottom: 0
  },
  icon4: {
    top: 5,
    left: 7,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 50
  },
  ellipse6Stack: {
    width: 63,
    height: 63
  },
  group8: {
    top: 457,
    left: 60,
    width: 63,
    height: 63,
    position: "absolute"
  },
  ellipse7: {
    left: 0,
    width: 63,
    height: 63,
    position: "absolute",
    bottom: 0
  },
  icon7: {
    top: 5,
    left: 8,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 50,
    width: 40,
    height: 43
  },
  ellipse7Stack: {
    width: 63,
    height: 63
  },
  group9: {
    top: 457,
    left: 155,
    width: 63,
    height: 63,
    position: "absolute"
  },
  ellipse8: {
    left: 0,
    width: 63,
    height: 63,
    position: "absolute",
    bottom: 0
  },
  icon8: {
    top: 5,
    left: 7,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 50
  },
  ellipse8Stack: {
    width: 63,
    height: 63
  },
  group10: {
    top: 457,
    left: 248,
    width: 63,
    height: 63,
    position: "absolute"
  },
  ellipse9: {
    left: 0,
    width: 63,
    height: 63,
    position: "absolute",
    bottom: 0
  },
  icon9: {
    top: 5,
    left: 7,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 50
  },
  ellipse9Stack: {
    width: 63,
    height: 63
  },
  group1StackStack: {
    width: 375,
    height: 812
  }
});

export default Authen;
