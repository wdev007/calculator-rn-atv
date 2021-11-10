import React, { FC } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

interface IProps {
  value: string;
}

const ResultsScreen: FC<IProps> = ({ value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

export default ResultsScreen;
