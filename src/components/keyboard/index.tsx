import React, { FC } from "react";
import { Text, View } from "react-native";
import AppButton from "../button";
import { styles } from "./styles";

interface IProps {
  handleClick: (value: string) => void;
}

const Keyboard: FC<IProps> = ({ handleClick }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <AppButton text="AC" type="complex" handleClick={handleClick} />
        <AppButton text="+/-" type="complex" handleClick={handleClick} />
        <AppButton text="%" type="complex" handleClick={handleClick} />
        <AppButton text="/" type="basic" handleClick={handleClick} />
      </View>
      <View style={styles.row}>
        <AppButton text="7" type="number" handleClick={handleClick} />
        <AppButton text="8" type="number" handleClick={handleClick} />
        <AppButton text="9" type="number" handleClick={handleClick} />
        <AppButton text="X" type="basic" handleClick={handleClick} />
      </View>
      <View style={styles.row}>
        <AppButton text="4" type="number" handleClick={handleClick} />
        <AppButton text="5" type="number" handleClick={handleClick} />
        <AppButton text="6" type="number" handleClick={handleClick} />
        <AppButton text="-" type="basic" handleClick={handleClick} />
      </View>
      <View style={styles.row}>
        <AppButton text="1" type="number" handleClick={handleClick} />
        <AppButton text="2" type="number" handleClick={handleClick} />
        <AppButton text="3" type="number" handleClick={handleClick} />
        <AppButton text="+" type="basic" handleClick={handleClick} />
      </View>
      <View style={styles.row}>
        <AppButton text="C" type="number" handleClick={handleClick} />
        <AppButton text="0" type="number" handleClick={handleClick} />
        <AppButton text="." type="number" handleClick={handleClick} />
        <AppButton text="=" type="basic" handleClick={handleClick} />
      </View>
    </View>
  );
};

export default Keyboard;
