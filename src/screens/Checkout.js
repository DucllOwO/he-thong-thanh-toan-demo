import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

function Checkout(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/font_41.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.text}>CHECK OUT</Text>
      <View style={styles.group2}>
        <View style={styles.image1Row}>
          <Image
            source={require("../assets/images/image_PJvA..png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
          <View style={styles.group}>
            <Text style={styles.hadum1}>HADUM</Text>
            <Text style={styles.autumnCardigan1}>Autumn Cardigan</Text>
            <Text style={styles.brown1}>[Brown]</Text>
            <Text style={styles.loremIpsum2}>$ 120</Text>
          </View>
        </View>
      </View>
      <View style={styles.group3}>
        <View style={styles.image2Row}>
          <Image
            source={require("../assets/images/image_QNgf..png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <View style={styles.bellezzaColumn}>
            <Text style={styles.bellezza}>BELLEZZA</Text>
            <Text style={styles.winterSweater}>Winter Sweater</Text>
            <Text style={styles.brown2}>[Brown]</Text>
            <Text style={styles.text}>$ 120</Text>
          </View>
        </View>
      </View>
      <View style={styles.group4}>
        <View style={styles.rect3Stack}>
          <View style={styles.rect3}></View>
          <View style={styles.rect2}></View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("CheckoutInfo")}
        style={styles.button1}
      >
        <View style={styles.group8}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Untitled")}
            style={styles.button2}
          >
            <View style={styles.group7}>
              <View style={styles.icon1Row}>
                <Icon name="cart" style={styles.icon1}></Icon>
                <Text style={styles.text3}>CHECK OUT</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <View style={styles.rect1}></View>
      <View style={styles.group6}>
        <View style={styles.image4Row}>
          <Image
            source={require("../assets/images/image_RXQC..png")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
          <Text style={styles.addPromoCode}>Add promo code</Text>
        </View>
      </View>
      <View style={styles.image5Row}>
        <Image
          source={require("../assets/images/image_HNNI..png")}
          resizeMode="contain"
          style={styles.image5}
        ></Image>
        <Text style={styles.delivery}>Delivery</Text>
        <Text style={styles.loremIpsum3}>$ 0</Text>
      </View>
      <View style={styles.rect4}></View>
      <View style={styles.estTotalRow}>
        <Text style={styles.estTotal}>EST TOTAL</Text>
        <Text style={styles.text2}>$ 240</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 150,
    height: 60,
    marginTop: 24,
    marginLeft: 113
  },
  text: {
    fontFamily: "adamina-regular",
    color: "rgba(221,133,96,1)",
    marginTop: 14
  },
  group2: {
    width: 234,
    height: 124,
    flexDirection: "row",
    marginTop: 38,
    marginLeft: 43
  },
  image1: {
    height: 124,
    width: 93
  },
  group: {
    width: 117,
    height: 106,
    marginLeft: 24,
    marginTop: 9
  },
  hadum1: {
    fontFamily: "adamina-regular",
    color: "#121212",
    letterSpacing: 5
  },
  autumnCardigan1: {
    fontFamily: "adamina-regular",
    color: "#121212",
    fontSize: 12,
    letterSpacing: 1,
    marginTop: 14
  },
  brown1: {
    fontFamily: "adamina-regular",
    color: "#121212",
    fontSize: 12,
    letterSpacing: 1,
    marginTop: 8
  },
  loremIpsum2: {
    fontFamily: "adamina-regular",
    color: "rgba(221,133,96,1)",
    marginTop: 14
  },
  image1Row: {
    height: 124,
    flexDirection: "row",
    flex: 1
  },
  group3: {
    width: 234,
    height: 124,
    marginTop: 24,
    marginLeft: 43
  },
  image2: {
    height: 124,
    width: 93
  },
  bellezza: {
    fontFamily: "adamina-regular",
    color: "#121212",
    letterSpacing: 5
  },
  winterSweater: {
    fontFamily: "adamina-regular",
    color: "#121212",
    fontSize: 12,
    letterSpacing: 1,
    marginTop: 14
  },
  brown2: {
    fontFamily: "adamina-regular",
    color: "#121212",
    fontSize: 12,
    letterSpacing: 1,
    marginTop: 8
  },
  bellezzaColumn: {
    width: 117,
    marginLeft: 24,
    marginTop: 9,
    marginBottom: 9
  },
  image2Row: {
    height: 124,
    flexDirection: "row"
  },
  group4: {
    width: 335,
    height: 11,
    marginTop: -309,
    marginLeft: 20
  },
  rect3: {
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
  rect3Stack: {
    width: 335,
    height: 8,
    marginTop: 2
  },
  button1: {
    width: 375,
    height: 92,
    marginTop: 574,
    alignSelf: "center"
  },
  group8: {
    width: 375,
    height: 92
  },
  button2: {
    width: 375,
    height: 92,
    backgroundColor: "rgba(0,0,0,1)"
  },
  group7: {
    width: 172,
    height: 43,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 101
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  text3: {
    fontFamily: "aclonica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginLeft: 8,
    marginTop: 10
  },
  icon1Row: {
    height: 43,
    flexDirection: "row",
    flex: 1
  },
  rect1: {
    width: 335,
    height: 1,
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 0.2,
    marginTop: -342,
    marginLeft: 20
  },
  group6: {
    width: 191,
    height: 26,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 80
  },
  image4: {
    height: 26,
    width: 26
  },
  addPromoCode: {
    fontFamily: "adamina-regular",
    color: "#121212",
    marginLeft: 54,
    marginTop: 3
  },
  image4Row: {
    height: 26,
    flexDirection: "row",
    flex: 1
  },
  image5: {
    height: 40,
    width: 40
  },
  delivery: {
    fontFamily: "adamina-regular",
    color: "#121212",
    fontSize: 14,
    marginLeft: 40,
    marginTop: 11
  },
  loremIpsum3: {
    fontFamily: "adamina-regular",
    color: "rgba(223,127,104,1)",
    marginLeft: 115,
    marginTop: 11
  },
  image5Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 80,
    marginRight: 21
  },
  rect4: {
    width: 335,
    height: 1,
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 0.2,
    marginTop: -48,
    marginLeft: 19
  },
  estTotal: {
    fontFamily: "adamina-regular",
    color: "#121212",
    letterSpacing: 1
  },
  text2: {
    fontFamily: "adamina-regular",
    color: "rgba(223,127,104,1)",
    marginLeft: 202
  },
  estTotalRow: {
    height: 19,
    flexDirection: "row",
    marginTop: 156,
    marginLeft: 19,
    marginRight: 21
  }
});

export default Checkout;
