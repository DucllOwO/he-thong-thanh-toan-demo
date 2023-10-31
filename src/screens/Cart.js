import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import Icon from "react-native-vector-icons/EvilIcons";

function Cart(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CART</Text>
      <View style={styles.group5}>
        <View style={styles.imageRow}>
          <Image
            source={require("../assets/images/image_PJvA..png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <View style={styles.group3}>
            <Text style={styles.hadum}>HADUM</Text>
            <Text style={styles.autumnCardigan}>Autumn Cardigan</Text>
            <Text style={styles.brown}>[Brown]</Text>
            <View style={styles.group2Row}>
              <View style={styles.group2}>
                <View style={styles.ellipseStack}>
                  <Svg viewBox="0 0 25 25" style={styles.ellipse}>
                    <Ellipse
                      stroke="rgba(196,196,196,1)"
                      strokeWidth={1}
                      cx={13}
                      cy={13}
                      rx={12}
                      ry={12}
                    ></Ellipse>
                  </Svg>
                  <View style={styles.rect}></View>
                </View>
              </View>
              <Text style={styles.loremIpsum}>1</Text>
              <View style={styles.group}>
                <View style={styles.ellipse2Stack}>
                  <Svg viewBox="0 0 25 25" style={styles.ellipse2}>
                    <Ellipse
                      stroke="rgba(196,196,196,1)"
                      strokeWidth={1}
                      cx={13}
                      cy={13}
                      rx={12}
                      ry={12}
                    ></Ellipse>
                  </Svg>
                  <View style={styles.rect2}></View>
                  <View style={styles.rect3}></View>
                </View>
              </View>
            </View>
            <Text style={styles.loremIpsum2}>$ 120</Text>
          </View>
        </View>
      </View>
      <View style={styles.group6Stack}>
        <View style={styles.group6}>
          <View style={styles.image2Row}>
            <Image
              source={require("../assets/images/image_QNgf..png")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
            <View style={styles.group4}>
              <Text style={styles.bellezza}>BELLEZZA</Text>
              <Text style={styles.winterSweater}>Winter Sweater</Text>
              <Text style={styles.brown2}>[Brown]</Text>
              <View style={styles.rect4Row}>
                <View style={styles.rect4}>
                  <View style={styles.ellipse3Stack}>
                    <Svg viewBox="0 0 25 25" style={styles.ellipse3}>
                      <Ellipse
                        stroke="rgba(196,196,196,1)"
                        strokeWidth={1}
                        cx={13}
                        cy={13}
                        rx={12}
                        ry={12}
                      ></Ellipse>
                    </Svg>
                    <View style={styles.rect5}></View>
                  </View>
                </View>
                <Text style={styles.text}>1</Text>
                <View style={styles.rect6}>
                  <View style={styles.ellipse4Stack}>
                    <Svg viewBox="0 0 25 25" style={styles.ellipse4}>
                      <Ellipse
                        stroke="rgba(196,196,196,1)"
                        strokeWidth={1}
                        cx={13}
                        cy={13}
                        rx={12}
                        ry={12}
                      ></Ellipse>
                    </Svg>
                    <View style={styles.rect7}></View>
                    <View style={styles.rect8}></View>
                  </View>
                </View>
              </View>
              <Text style={styles.text2}>$ 120</Text>
            </View>
          </View>
        </View>
        <View style={styles.rect10}></View>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Untitled")}
        style={styles.button}
      >
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Untitled")}
          style={styles.button}
        >
          <View style={styles.group7}>
            <View style={styles.iconRow}>
              <Icon name="cart" style={styles.icon}></Icon>
              <Text style={styles.buyNow}>BUY NOW</Text>
            </View>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.subTotalRow}>
        <Text style={styles.subTotal}>Sub Total</Text>
        <Text style={styles.loremIpsum3}>$ 240</Text>
      </View>
      <Text style={styles.loremIpsum4}>
        *shipping charges, taxes and discount codes{"\n"}are calculated at the
        time of accounting.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontFamily: "adamina-regular",
    color: "#121212",
    marginLeft: 16,
    marginTop: 3
  },
  group5: {
    width: 297,
    height: 200,
    flexDirection: "row",
    marginTop: 26,
    marginLeft: 19
  },
  image: {
    height: 200,
    width: 150
  },
  group3: {
    width: 117,
    height: 162,
    marginLeft: 30,
    marginTop: 19
  },
  hadum: {
    fontFamily: "adamina-regular",
    color: "#121212",
    letterSpacing: 5,
    marginLeft: 1
  },
  autumnCardigan: {
    fontFamily: "adamina-regular",
    color: "#121212",
    fontSize: 12,
    letterSpacing: 1,
    marginTop: 24
  },
  brown: {
    fontFamily: "adamina-regular",
    color: "#121212",
    fontSize: 12,
    letterSpacing: 1,
    marginTop: 8
  },
  group2: {
    width: 25,
    height: 25
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 25,
    height: 25,
    position: "absolute"
  },
  rect: {
    top: 12,
    left: 5,
    width: 13,
    height: 1,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)"
  },
  ellipseStack: {
    width: 25,
    height: 25
  },
  loremIpsum: {
    fontFamily: "adamina-regular",
    color: "#121212",
    marginLeft: 16,
    marginTop: 3
  },
  group: {
    width: 25,
    height: 25,
    marginLeft: 16
  },
  ellipse2: {
    top: 0,
    left: 0,
    width: 25,
    height: 25,
    position: "absolute"
  },
  rect2: {
    top: 12,
    left: 8,
    width: 10,
    height: 1,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)"
  },
  rect3: {
    top: 11,
    left: 8,
    width: 10,
    height: 1,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    transform: [
      {
        rotate: "90.00deg"
      }
    ]
  },
  ellipse2Stack: {
    width: 25,
    height: 25
  },
  group2Row: {
    height: 25,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 1,
    marginRight: 28
  },
  loremIpsum2: {
    fontFamily: "adamina-regular",
    color: "rgba(221,133,96,1)",
    marginTop: 12
  },
  imageRow: {
    height: 200,
    flexDirection: "row",
    flex: 1
  },
  group6: {
    top: 0,
    left: 0,
    width: 297,
    height: 200,
    position: "absolute",
    flexDirection: "row"
  },
  image2: {
    height: 200,
    width: 150
  },
  group4: {
    width: 117,
    height: 162,
    marginLeft: 30,
    marginTop: 19
  },
  bellezza: {
    fontFamily: "adamina-regular",
    color: "#121212",
    letterSpacing: 5,
    marginLeft: 1
  },
  winterSweater: {
    fontFamily: "adamina-regular",
    color: "#121212",
    fontSize: 12,
    letterSpacing: 1,
    marginTop: 24
  },
  brown2: {
    fontFamily: "adamina-regular",
    color: "#121212",
    fontSize: 12,
    letterSpacing: 1,
    marginTop: 8
  },
  rect4: {
    width: 25,
    height: 25
  },
  ellipse3: {
    top: 0,
    left: 0,
    width: 25,
    height: 25,
    position: "absolute"
  },
  rect5: {
    top: 12,
    left: 5,
    width: 13,
    height: 1,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)"
  },
  ellipse3Stack: {
    width: 25,
    height: 25
  },
  rect6: {
    width: 25,
    height: 25,
    marginLeft: 16
  },
  ellipse4: {
    top: 0,
    left: 0,
    width: 25,
    height: 25,
    position: "absolute"
  },
  rect7: {
    top: 12,
    left: 8,
    width: 10,
    height: 1,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)"
  },
  rect8: {
    top: 11,
    left: 8,
    width: 10,
    height: 1,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    transform: [
      {
        rotate: "90.00deg"
      }
    ]
  },
  ellipse4Stack: {
    width: 25,
    height: 25
  },
  rect4Row: {
    height: 25,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 1,
    marginRight: 28
  },
  text2: {
    fontFamily: "adamina-regular",
    color: "rgba(221,133,96,1)",
    marginTop: 12
  },
  image2Row: {
    height: 200,
    flexDirection: "row",
    flex: 1
  },
  rect10: {
    width: 335,
    height: 1,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 0.2,
    left: 1,
    top: 57
  },
  group6Stack: {
    width: 336,
    height: 200,
    marginTop: 45,
    marginLeft: 19
  },
  button: {
    width: 375,
    height: 92,
    backgroundColor: "rgba(0,0,0,1)"
  },
  group7: {
    width: 151,
    height: 43,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 112
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  buyNow: {
    fontFamily: "aclonica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginLeft: 8,
    marginTop: 10
  },
  iconRow: {
    height: 43,
    flexDirection: "row",
    flex: 1
  },
  subTotal: {
    fontFamily: "adamina-regular",
    color: "#121212",
    letterSpacing: 1,
    marginTop: 1
  },
  loremIpsum3: {
    fontFamily: "adamina-regular",
    color: "#df7f68",
    fontSize: 16,
    marginLeft: 224
  },
  subTotalRow: {
    height: 22,
    flexDirection: "row",
    marginTop: -182,
    marginLeft: 18,
    marginRight: 15
  },
  loremIpsum4: {
    fontFamily: "adamina-regular",
    color: "rgba(136,136,136,1)",
    letterSpacing: 1,
    fontSize: 12,
    lineHeight: 20,
    marginTop: 8,
    marginLeft: 18
  }
});

export default Cart;
