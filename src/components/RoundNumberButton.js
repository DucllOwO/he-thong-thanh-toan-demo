import { Text as TextNB, Center } from "native-base";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";

const width = Dimensions.get("window").width;

export default function RoundNumberButton({ text }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Center flex={1}>
        <TextNB style={styles.text}>{text}</TextNB>
      </Center>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.2,
    height: width * 0.2,
    backgroundColor: "#D9D9D9",
    borderRadius: 50,
  },
  text: {
    fontSize: 24,
    fontFamily: "itim",
  },
});
