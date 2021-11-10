import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const customStyles = (type: "basic" | "number" | "complex") => {
  let color;
  if (type === "basic") {
    color = colors.buttonSecundary;
  } else if (type === "complex") {
    color = colors.buttonPrimary;
  } else {
    color = colors.white;
  }

  return StyleSheet.create({
    container: {
      width: "22%",
      height: 65,
      borderRadius: 10,
      alignItems: "center",
      backgroundColor: colors.primaryBgColor,
      color,
      justifyContent: "center",
      fontSize: 28,
      fontWeight: "900",
    },
  });
};
