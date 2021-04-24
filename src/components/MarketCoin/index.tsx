import React from "react";
import { View, Text, Image } from "react-native";

import styles from './styles';

export interface MarketCoinProps {
  marketCoin: {
    image: string,
    name: string,
    symbol: string,
    rate: number,
    valueUSD: number,
  }
}

const MarketCoin = (props: MarketCoinProps) => {
  const {
    marketCoin: { image, name, symbol, rate, valueUSD },
  } = props;
  return (
    <View style={styles.root}>
      <View style={styles.left}>
        <Image style={styles.image} source={{ uri: image }} />
        <View >
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <Text style={styles.value}>${valueUSD}</Text>
        <Text style={{ color: rate > 0 ? 'blue' : 'red' }}>{ rate > 0 && '+' }{rate}</Text>
      </View>
    </View>
  );
};

export default MarketCoin;
