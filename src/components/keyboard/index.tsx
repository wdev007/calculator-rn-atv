import React from "react";
import { Text, View } from "react-native";
import AppButton from "../button";
import { styles } from "./styles";

const Keyboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <AppButton text="1" handleClick={() => {}} />
        <AppButton text="1" handleClick={() => {}} />
        <AppButton text="1" handleClick={() => {}} />
        <AppButton text="1" handleClick={() => {}} />
      </View>
      <View style={styles.row}>
        <AppButton text="1" handleClick={() => {}} />
        <AppButton text="1" handleClick={() => {}} />
        <AppButton text="1" handleClick={() => {}} />
        <AppButton text="1" handleClick={() => {}} />
      </View>
      <View style={styles.row}>
        <AppButton text="1" handleClick={() => {}} />
        <AppButton text="1" handleClick={() => {}} />
        <AppButton text="1" handleClick={() => {}} />
        <AppButton text="1" handleClick={() => {}} />
      </View>
      <View style={styles.row}>
        <AppButton text="1" handleClick={() => {}} />
        <AppButton text="1" handleClick={() => {}} />
        <AppButton text="1" handleClick={() => {}} />
        <AppButton text="1" handleClick={() => {}} />
      </View>
      <View style={styles.row}>
        <AppButton text="1" handleClick={() => {}} />
        <AppButton text="1" handleClick={() => {}} />
        <AppButton text="1" handleClick={() => {}} />
        <AppButton text="1" handleClick={() => {}} />
      </View>
    </View>
  );
};

export default Keyboard;
