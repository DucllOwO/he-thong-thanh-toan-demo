import { Image } from "native-base";

const Logo = (props) => (
  <Image
    width={"140px"}
    h={"40px"}
    source={require("../assets/images/logo.png")}
    alt="logo"
  />
);
export default Logo;
