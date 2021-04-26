import { Auth } from "aws-amplify";
import { useNavigation } from "@react-navigation/core";
import { CommonActions } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";

import styles from "./styles";
const image = require("../../../assets/images/Saly-16.png");

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState({
    id: "1",
    name: "Collin",
    email: "tcol23@gmail.com",
    image:
      "https://images.unsplash.com/photo-1583951171188-48057a97073f?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    netWorth: 1200,
  });

  const signOut = async () => {
    await Auth.signOut();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: 'Welcome' }
        ]
      })
    );
  }
  

  return (
    <View style={styles.root}>
      <Image style={styles.image} source={image} />
      <View style={styles.userContainer}>
        <View style={styles.left}>
          <Image style={styles.profileImage} source={{ uri: user.image }} />
          <View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={styles.value}>${user.netWorth}</Text>
        </View>
      </View>
      <Pressable
        onPress={signOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign Out</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
