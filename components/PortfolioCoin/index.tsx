import React from "react";
import { View, Text, Image } from "react-native";

import styles from './styles';

export interface PortfolioCoinProps {
  portfolioCoin: {
    image: string;
    name: string;
    symbol: string;
    amount: number;
    valueUSD: number;
  };
}

const PortfolioCoin = (props: PortfolioCoinProps) => {
  const {
    portfolioCoin: { image, name, symbol, amount, valueUSD },
  } = props;
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={{ uri: image }} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.symbol}>{symbol}</Text>
        <Text style={styles.name}>${valueUSD}</Text>
        <Text style={styles.name}>{symbol} {amount}</Text>
      </View>
    </View>
  );
};

export default PortfolioCoin;
