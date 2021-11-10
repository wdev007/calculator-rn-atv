import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  containerValues: {
    height: "70%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 35,
    fontWeight: "900",
    color: colors.white,
  },
  value: {
    fontSize: 18,
    fontWeight: "400",
    color: colors.white,
  },
});
