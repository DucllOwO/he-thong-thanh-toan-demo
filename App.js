import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
import Checkout from "./src/screens/Checkout";
import Failed from "./src/screens/Failed";
import Sucess from "./src/screens/Sucess";
import { NativeBaseProvider } from "native-base";

import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native";
import InsertCard from "./src/screens/InsertCard";
import CardInformation from "./src/screens/CardInformation";

export const height = Dimensions.get("window").height;
export const width = Dimensions.get("window").width;

export const globalStyles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

const Stack = createNativeStackNavigator();

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <NativeBaseProvider>
        <AppLoading
          startAsync={loadResourcesAsync}
          onError={handleLoadingError}
          onFinish={() => handleFinishLoading(setLoadingComplete)}
        />
      </NativeBaseProvider>
    );
  } else {
    return isLoadingComplete ? (
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="checkout"
              component={Checkout}
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name="insertCard"
              component={InsertCard}
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name="cardInformation"
              component={CardInformation}
              options={{ headerShown: false }}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    ) : (
      <AppLoading />
    );
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "josefinsans-medium": require("./src/assets/fonts/JosefinSans-Medium.ttf"),
      "josefinsans-regular": require("./src/assets/fonts/JosefinSans-Regular.ttf"),
      "itim-regular": require("./src/assets/fonts/Itim-Regular.ttf"),
    }),
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
