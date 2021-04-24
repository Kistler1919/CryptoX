import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import MarketCoin from "../../components/MarketCoin";
// import { FlatList } from "react-native-gesture-handler";
import PortfolioCoin from "../../components/PortfolioCoin";
import UserRankingItem from "../../components/UserRankingItem";

import styles from "./styles";
const image = require("../../../assets/images/Saly-20.png");

const user = [
  {
    id: '1',
    name: 'Virtual Dollars',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    netWorth: 41969,
  },
  {
    id: '2',
    name: 'Bitcoin',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    netWorth: 42069,
  },
  {
    id: '3',
    name: 'Etherium',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    netWorth: 42069,
  },
  {
    id: '4',
    name: 'Etherium',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    netWorth: 42069,
  },
  {
    id: '5',
    name: 'Etherium',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    netWorth: 42069,
  },
  {
    id: '6',
    name: 'Etherium',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    netWorth: 42069,
  },
  {
    id: '7',
    name: 'Etherium',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    netWorth: 42069,
  },
  {
    id: '8',
    name: 'Etherium',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    netWorth: 42069,
  },
  {
    id: '9',
    name: 'Etherium',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    netWorth: 42069,
  },
  {
    id: '10',
    name: 'Etherium',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    netWorth: 42069,
  },
  {
    id: '11',
    name: 'Etherium',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    netWorth: 42069,
  },
];

const RankingScreen = () => {
  return (
    <View style={styles.root}>
      
      <FlatList
        style={{ width: '100%' }}
        data={user}
        renderItem={({item, index}) => <UserRankingItem user={item} key={item.id} place={index + 1} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{ alignItems: 'center' }}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />
            <Text style={styles.label}>Rankings</Text>
          </>
        )}
      />
    </View>
  );
};

export default RankingScreen;
