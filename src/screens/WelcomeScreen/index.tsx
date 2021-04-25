import React from "react";
import { View, Text, Image, Pressable } from "react-native";

import styles from "./styles";
const image = require("../../../assets/images/Saly-1.png");
const imageButton = require("../../../assets/images/google.png");

const WelcomeScreen = () => {

  const signInGoogle = () => {
    //
  }
  
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={image} />
      <Text style={styles.header}>Welcome to CryptoX</Text>
      <Text style={styles.header1}>
        Invest your virtual $120,000.00 and compete with others.
      </Text>

      <Pressable onPress={signInGoogle} style={styles.googleButton}>
        <Image style={styles.imageButton} source={imageButton} />
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;
