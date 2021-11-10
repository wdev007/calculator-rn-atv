import React, { FC } from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface IProps {
  text: string;
  handleClick: () => void;
}

const AppButton: FC<IProps> = ({ text, handleClick }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      {text}
    </TouchableOpacity>
  );
};

export default AppButton;
