import { CommonActions, useNavigation } from "@react-navigation/core";
import { Hub, Auth } from "aws-amplify";
import React, { useEffect } from "react";
import { View, Text, Image, Pressable } from "react-native";

import styles from "./styles";
const image = require("../../../assets/images/Saly-1.png");
const imageButton = require("../../../assets/images/google.png");

const WelcomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await Auth.currentAuthenticatedUser();
      if (user) {
        console.log('User data');
        console.log(user);
        // navigation.navigate("Root");
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              { name: 'Root' }
            ]
          })
        );
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      if (event === "signIn") {
        navigation.navigate("Root");
      }
    });
  }, [])

  const signInGoogle = async () => {
    await Auth.federatedSignIn({ provider: "Google" });
  };

  return (
    <View style={styles.root}>
      <Image style={styles.image} source={image} />
      <Text style={styles.header}>Welcome to CryptoX</Text>
      <Text style={styles.header1}>
        Invest your virtual $100,000 and compete with others.
      </Text>

      <Pressable onPress={signInGoogle} style={styles.googleButton}>
        <Image style={styles.imageButton} source={imageButton} />
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;
