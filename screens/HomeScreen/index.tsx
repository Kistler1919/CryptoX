import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";
const image = require('../../assets/images/Saly-1.png');

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={image} />
      <Text style={styles.header}>Welcome to CryptoX</Text>
      <Text style={styles.header1}>Invest your virtual $120,000.00 and compete with others.</Text>
    </View>
  );
};

export default HomeScreen;
