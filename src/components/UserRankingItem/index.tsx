import React from "react";
import { View, Text, Image } from "react-native";

import styles from './styles';

export interface UserRankingItemProps {
  user: {
    image: string,
    name: string,
    netWorth: number,
  }, 
  place: number,
}

const UserRankingItem = (props: UserRankingItemProps) => {
  const {
    user: { image, name, netWorth }, place
  } = props;
  return (
    <View style={styles.root}>
      <View style={styles.left}>
        <Text style={styles.place}>{place}</Text>
        <Image style={styles.image} source={{ uri: image }} />
        <View >
          <Text style={styles.name}>{name}</Text>
          {/* <Text style={styles.symbol}>{place}</Text> */}
        </View>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <Text style={styles.value}>${netWorth}</Text>
        {/* <Text style={{ color: rate > 0 ? 'blue' : 'red' }}>{ rate > 0 && '+' }{rate}</Text> */}
      </View>
    </View>
  );
};

export default UserRankingItem;
