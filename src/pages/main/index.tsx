import React, { useState } from "react";
import { View } from "react-native";
import Keyboard from "../../components/keyboard";
import ResultsScreen from "../../components/resultsScreen";
import { validCharacters } from "../../constants/colors";
import { styles } from "./styles";

const Main = () => {
  const [valueToCalc, setValueToCalc] = useState("");

  const handleValue = (value: string) => {
    if (!Number(value) && !validCharacters.includes(value)) return;

    if (value === "=") {
      console.log("valueToCalc: ", valueToCalc.split(" ").filter(Boolean));
      return;
    }
    setValueToCalc(
      (prevState) =>
        `${prevState}${Number(value) || value === "." ? value : `  ${value}  `}`
    );
  };

  return (
    <View style={styles.container}>
      <ResultsScreen value={valueToCalc} />
      <Keyboard handleClick={handleValue} />
    </View>
  );
};

export default Main;
