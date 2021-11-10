import React, { FC } from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

interface IProps {
  value: string;
  total: string;
}

const ResultsScreen: FC<IProps> = ({ value, total }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerValues}>
        {total && value && <Text style={styles.value}>{value}</Text>}
        {!total && value && <Text style={styles.text}>{value}</Text>}
        {total && <Text style={styles.text}>{total}</Text>}
      </View>
    </View>
  );
};

export default ResultsScreen;
