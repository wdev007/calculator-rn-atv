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
  console.log("");
  return StyleSheet.create({
    container: {
      width: 85,
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
export const styles = StyleSheet.create({
  container: {
    width: 85,
    height: 65,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: colors.primaryBgColor,
    justifyContent: "center",
    fontSize: 28,
  },
  basic: {
    color: colors.buttonSecundary,
  },
  number: {
    color: colors.white,
  },
  complex: {
    color: colors.buttonPrimary,
  },
});
