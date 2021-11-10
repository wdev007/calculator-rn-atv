import React, { useState } from "react";
import { View } from "react-native";
import Keyboard from "../../components/keyboard";
import ResultsScreen from "../../components/resultsScreen";
import { mapCharacters, validCharacters } from "../../constants/colors";
import { styles } from "./styles";

const Main = () => {
  const [valueToCalc, setValueToCalc] = useState("");
  const [total, setTotal] = useState("");

  const handleValue = (value: string) => {
    if (!Number(value) && !validCharacters.includes(value)) return;

    if (value === "C") {
      setValueToCalc("");
      setTotal("");
      return;
    }

    if (value === "=") {
      const result = eval(
        valueToCalc
          .split(" ")
          .map((item) => {
            if (mapCharacters[item]) return mapCharacters[item];
            return item;
          })
          .filter(Boolean)
          .join(" ")
      );
      setTotal(result);
      return;
    }
    setValueToCalc(
      (prevState) =>
        `${prevState}${Number(value) || value === "." ? value : `  ${value}  `}`
    );
  };

  return (
    <View style={styles.container}>
      <ResultsScreen total={total} value={valueToCalc} />
      <Keyboard handleClick={handleValue} />
    </View>
  );
};

export default Main;
