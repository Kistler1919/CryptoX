import  { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import MarketCoin from "../../components/MarketCoin";
// import { FlatList } from "react-native-gesture-handler";
import PortfolioCoin from "../../components/PortfolioCoin";

import styles from "./styles";
import { listCoins } from '../../graphql/queries';
const image = require("../../../assets/images/Saly-17.png");

// const marketCoins = [
//   {
//     id: '1',
//     name: 'Virtual Dollars',
//     image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
//     symbol: 'USD',
//     rate: 419.69,
//     valueUSD: 41969,
//   },
//   {
//     id: '2',
//     name: 'Bitcoin',
//     image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
//     symbol: 'EUR',
//     rate: -1.21,
//     valueUSD: 42069,
//   },
//   {
//     id: '3',
//     name: 'Etherium',
//     symbol: 'ETH',
//     image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
//     rate: 1.16,
//     valueUSD: 42069,
//   },
//   {
//     id: '4',
//     name: 'Etherium',
//     symbol: 'ETH',
//     image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
//     rate: -1.16,
//     valueUSD: 42069,
//   },
//   {
//     id: '5',
//     name: 'Etherium',
//     symbol: 'ETH',
//     image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
//     rate: 1.16,
//     valueUSD: 42069,
//   },
//   {
//     id: '6',
//     name: 'Etherium',
//     symbol: 'ETH',
//     image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
//     rate: 1.16,
//     valueUSD: 42069,
//   },
  
  
// ];

const MarketScreen = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoins = async () => {
    setLoading(true);
    try {
      const response = await API.graphql(graphqlOperation(listCoins));
      setCoins(response.data.listCoins.items);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }
  

  useEffect(() => {
    fetchCoins();
  }, [])
  return (
    <View style={styles.root}>
      
      <FlatList
        style={{ width: '100%' }}
        data={coins}
        onRefresh={fetchCoins}
        refreshing={loading}
        renderItem={({item}) => <MarketCoin marketCoin={item} key={item.id} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{ alignItems: 'center' }}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />
            <Text style={styles.label}>Market</Text>
          </>
        )}
      />
    </View>
  );
};


export default MarketScreen;
