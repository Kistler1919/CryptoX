import React from "react";
import { View, Text, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import PortfolioCoin from "../../components/PortfolioCoin";

import styles from "./styles";
const image = require("../../../assets/images/Saly-10.png");

const portfolioCoins = [
  {
    id: 1,
    name: "Virtual Dollars",
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Flogos-world.net%2Fbitcoin-logo%2F&psig=AOvVaw3EPYpLF2BmvPF91t7lzLTk&ust=1614304070420000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLi1x731g-8CFQAAAAAdAAAAABAD',
    symbol: "USD",
    amount: 419.69,
    valueUSD: 419.69,
  },
  {
    id: 2,
    name: "Bitcoin",
    image: 'abc',
    symbol: "EUR",
    amount: 1.21,
    valueUSD: 420.69,
  },
  {
    id: 3,
    name: "Etherium",
    symbol: "ETH",
    image: 'abc',
    amount: 1.16,
    valueUSD: 420.69,
  },
];

const PortfolioScreen = () => {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={image} />
      <View style={styles.balanceContainer}>
        <Text style={styles.label}>Portfolio balance</Text>
        <Text style={styles.balance}>69.420</Text>
      </View>
      <FlatList
        data={portfolioCoins}
        renderItem={({ item }) => (
          <PortfolioCoin portfolioCoin={item} />
        )}
      />
    </View>
  );
};

export default PortfolioScreen;
