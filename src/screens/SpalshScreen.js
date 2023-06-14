import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {Color, Images, FontSize} from '../contants';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.splashscreen}
      locations={[0, 0.4, 0.88]}
      colors={["#fff", "#faaa43", "#d97a00"]}
    >
      <Pressable
        style={styles.logo}
        onPress={() => navigation.navigate("OnboardingScreen")}
      >
        <View style={[styles.mckeysParent, styles.mckeysLayout]}>
          <Text style={[styles.mckeys, styles.mckeysFlexBox]}>MCKEYS</Text>
          <Text style={[styles.foodOrderApp, styles.mckeysFlexBox]}>
            Food Order App
          </Text>
          <Image
            style={styles.subtractIcon}
            resizeMode="cover"
            source={Images.PLATE}
          />
        </View>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  mckeysLayout: {
    width: 413,
    left: 0,
  },
  mckeysFlexBox: {
    alignItems: "center",
    display: "flex",
    color: Color.white,
    position: "absolute",
  },
  mckeys: {
    top: 124,
    fontSize: FontSize.size_13xl,
    textAlign: "center",
    justifyContent: "center",
    height: 30,
    width: 413,
    left: 0,
  },
  foodOrderApp: {
    top: 158,
    left: 148,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    width: 115,
    height: 14,
  },
  subtractIcon: {
    width: 111,
    height: 118,
  },
  mckeysParent: {
    top: 15,
    height: 172,
    position: "absolute",
  },
  logo: {
    top: 253,
    left: 2,
    width: 412,
    height: 187,
    position: "absolute",
  },
  splashscreen: {
    flex: 1,
    width: "100%",
    height: 736,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default SplashScreen;