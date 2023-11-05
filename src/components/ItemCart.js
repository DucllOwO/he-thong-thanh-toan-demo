import {
  Row,
  IconButton,
  AddIcon,
  MinusIcon,
  View,
  Image,
  Text,
  Center,
  HStack,
  Container,
  Box,
} from "native-base";
import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;

export function ItemCart({ name, category, colors, price, imageUrl, amount }) {
  return (
    <Container marginTop={3} marginBottom={3}>
      <Box width={width} display={"flex"} flexDirection={"row"}>
        <Image
          source={imageUrl}
          resizeMode="contain"
          style={styles.image}
          alt="Cloth image"
        ></Image>
        <View style={styles.infor}>
          <Text style={styles.itemTitle}>{name}</Text>
          <Text style={styles.itemCategory}>{category}</Text>
          <Text style={styles.price}>đ {price}</Text>
        </View>
        <Center alignSelf={"end"} flex={1}>
          <Text color={"#DD8560"}>x {amount}</Text>
        </Center>
      </Box>
    </Container>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 150,
  },
  infor: {
    marginLeft: 15,
    width: width * 0.37,
  },
  itemTitle: {
    fontFamily: "josefinsans-medium",
    fontWeight: "700",
  },
  itemCategory: {
    fontFamily: "josefinsans-regular",
  },
  price: {
    fontFamily: "josefinsans-medium",
    color: "#DD8560",
  },
  row: {
    height: 200,
    flexDirection: "row",
    flex: 1,
  },
});
