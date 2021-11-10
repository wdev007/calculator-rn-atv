import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    width: 85,
    height: 65,
    color: colors.buttonPrimary,
    backgroundColor: colors.primaryBgColor,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 28,
  },
});
