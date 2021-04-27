import  { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import MarketCoin from "../../components/MarketCoin";
// import { FlatList } from "react-native-gesture-handler";
import PortfolioCoin from "../../components/PortfolioCoin";

import styles from "./styles";
import { listCoins } from '../../graphql/queries';
const image = require("../../../assets/images/Saly-17.png");


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
