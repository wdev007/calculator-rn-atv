import React, { FC } from "react";
import { TouchableOpacity } from "react-native";

import { customStyles } from "./styles";

interface IProps {
  text: string;
  handleClick: (value: string) => void;
  type: "basic" | "number" | "complex";
}

const AppButton: FC<IProps> = ({ text, handleClick, type }) => {
  return (
    <TouchableOpacity
      style={customStyles(type).container as any}
      onPress={() => handleClick(text)}
    >
      {text}
    </TouchableOpacity>
  );
};

export default AppButton;
