import React from "react";
import { View, Text, Image, FlatList } from "react-native";
// import { FlatList } from "react-native-gesture-handler";
import PortfolioCoin from "../../components/PortfolioCoin";

import styles from "./styles";
const image = require("../../../assets/images/Saly-10.png");

const portfolioCoins = [
  {
    id: '1',
    name: 'Virtual Dollars',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    symbol: 'USD',
    amount: 419.69,
    valueUSD: 41969,
  },
  {
    id: '2',
    name: 'Bitcoin',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    symbol: 'EUR',
    amount: 1.21,
    valueUSD: 42069,
  },
  {
    id: '3',
    name: 'Etherium',
    symbol: 'ETH',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    amount: 1.16,
    valueUSD: 42069,
  },
  {
    id: '4',
    name: 'Etherium',
    symbol: 'ETH',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    amount: 1.16,
    valueUSD: 42069,
  },
  {
    id: '5',
    name: 'Etherium',
    symbol: 'ETH',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    amount: 1.16,
    valueUSD: 42069,
  },
  {
    id: '6',
    name: 'Etherium',
    symbol: 'ETH',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    amount: 1.16,
    valueUSD: 42069,
  },
  {
    id: '7',
    name: 'Etherium',
    symbol: 'ETH',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    amount: 1.16,
    valueUSD: 42069,
  },
  {
    id: '8',
    name: 'Etherium',
    symbol: 'ETH',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    amount: 1.16,
    valueUSD: 42069,
  },
  {
    id: '9',
    name: 'Etherium',
    symbol: 'ETH',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    amount: 1.16,
    valueUSD: 42069,
  },
  {
    id: '10',
    name: 'Etherium',
    symbol: 'ETH',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    amount: 1.16,
    valueUSD: 42069,
  },
  {
    id: '11',
    name: 'Etherium',
    symbol: 'ETH',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    amount: 1.16,
    valueUSD: 42069,
  },
];

const PortfolioScreen = () => {
  return (
    <View style={styles.root}>
      
      <FlatList
        style={{ width: '100%' }}
        data={portfolioCoins}
        renderItem={({item}) => <PortfolioCoin portfolioCoin={item} key={item.id} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{ alignItems: 'center' }}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />
            <View style={styles.balanceContainer}>
              <Text style={styles.label}>Portfolio balance</Text>
              <Text style={styles.balance}>$420.69</Text>
            </View>
          </>
        )}
      />
    </View>
  );
};

export default PortfolioScreen;
