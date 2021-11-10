import React from "react";
import { Text, View } from "react-native";
import Keyboard from "../../components/keyboard";
import ResultsScreen from "../../components/resultsScreen";
import { styles } from "./styles";

const Main = () => {
  return (
    <View style={styles.container}>
      <ResultsScreen />
      <Keyboard />
    </View>
  );
};

export default Main;
