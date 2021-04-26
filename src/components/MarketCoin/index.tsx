import { useNavigation, useNavigationState } from "@react-navigation/core";
import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import ChangeRate from "../PercentageChange";

import styles from "./styles";

export interface PortfolioCoinProps {
  marketCoin: {
    image: string;
    name: string;
    symbol: string;
    rate: number;
    valueUSD: number;
  };
}

const MarketCoin = (props: PortfolioCoinProps) => {
  const {
    marketCoin: { image, name, symbol, rate, valueUSD },
  } = props;

  const navigation = useNavigation();

  return (
    <Pressable style={styles.root} onPress={() => navigation.navigate('CoinDetails')}>
      <View style={styles.left}>
        <Image style={styles.image} source={{ uri: image }} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.value}>${valueUSD}</Text>
        <ChangeRate value={rate} />
        {/* <Text style={{ color: rate > 0 ? "blue" : "red" }}>
          {rate > 0 && "+"}
          {rate}
        </Text> */}
      </View>
    </Pressable>
  );
};

export default MarketCoin;
