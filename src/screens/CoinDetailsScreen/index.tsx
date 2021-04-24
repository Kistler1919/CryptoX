import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import ChangeRate from "../../components/PercentageChange";
import styles from "./styles";

const CoinDetailsScreen = () => {
  const [coinData, setCoinData] = useState({
    id: "1",
    name: "Bitcoin",
    image:
      "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    rate1h: -1.32,
    rate1day: 2.16,
    rate7days: 3.43,
    currentPrice: 42069,
    amount: 4,
    symbol: "BTC",
  });

  const onSell = () => {
    //
  }
  const onBuy = () => {
    //
  }
  
  return (
    <View style={styles.root}>
      <View style={styles.topContainer}>
        <View style={styles.left}>
          <Image style={styles.image} source={{ uri: coinData.image }} />
          <View>
            <Text style={styles.name}>{coinData.name}</Text>
            <Text style={styles.symbol}>{coinData.symbol}</Text>
          </View>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <AntDesign name={"staro"} size={30} color={"#2f95dc"} />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.valueContainer}>
          <Text style={styles.label}>Current Price</Text>
          <Text style={styles.value}>{coinData.currentPrice}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.valueContainer}>
            <Text style={styles.label}>1 hour</Text>
            <ChangeRate value={coinData.rate1h} />
          </View>

          <View style={styles.valueContainer}>
            <Text style={styles.label}>1 day</Text>
            <ChangeRate value={coinData.rate1day} />
          </View>

          <View style={styles.valueContainer}>
            <Text style={styles.label}>7 days</Text>
            <ChangeRate value={coinData.rate7days} />
          </View>
        </View>
      </View>

      <View style={styles.row}>
        <Text>Position</Text>
        <Text>
          {coinData.symbol} {coinData.amount}
          {' '}
          (${coinData.currentPrice * coinData.amount})
        </Text>
      </View>

      <View style={[styles.row, { marginTop: 'auto' }]}>
        <Pressable
          style={[styles.button, {backgroundColor: '#555a86'}]}
          onPress={onBuy}
        >
          <Text style={styles.buttonText}>Buy</Text>
        </Pressable>

        <Pressable
          style={[styles.button, {backgroundColor: '#eb1515'}]}
          onPress={onSell}
        >
          <Text style={styles.buttonText}>Sell</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CoinDetailsScreen;
