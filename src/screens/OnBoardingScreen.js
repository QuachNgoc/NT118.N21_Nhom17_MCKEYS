import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, Images } from "../contants";

const OnBoardingScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.onboarding5}
      locations={[0, 0.47, 1]}
      colors={["#fff", "#faaa43", "#d97a00"]}
    >
      <View style={[styles.background, styles.startbtnPosition]}>
        <Image
          style={[styles.background, styles.startbtnPosition]}
          resizeMode="cover"
          source={Images.MASKGROUP}
        />
        <Text style={[styles.mckeys, styles.mckeysFlexBox]}>MCKEYS</Text>
        <Text style={styles.foodOrderApp}>Food Order App</Text>
      </View>
      <View style={styles.description}>
        <View style={[styles.title, styles.titleLayout]}>
          <Text style={[styles.sauMtBa, styles.btUTypo]}>
            Sau một bữa tối ngon lành, người ta có thể yêu bất cứ ai, kể cả
            chính mình
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.button, styles.startbtnLayout]}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <View style={[styles.startbtn, styles.startbtnLayout]}>
          <View style={[styles.startbtnChild, styles.startbtnLayout]} />
          <Text style={[styles.btU, styles.btUTypo]}>Bắt đầu</Text>
        </View>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  startbtnPosition: {
    left: 0,
    top: 0,
  },
  mckeysFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  titleLayout: {
    height: 96,
    width: 346,
    left: 0,
    top: 0,
  },
  btUTypo: {
    lineHeight: 30,
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  startbtnLayout: {
    height: 50,
    width: 332,
    position: "absolute",
  },
  background: {
    width: 414,
    height: 896,
    position: "absolute",
  },
  mckeys: {
    top: 66,
    left: 164,
    fontSize: FontSize.size_13xl,
    width: 200,
    height: 30,
    textAlign: "center",
    color: Color.white,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  foodOrderApp: {
    top: 96,
    left: 207,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    width: 115,
    height: 14,
    alignItems: "center",
    display: "flex",
    color: Color.white,
    position: "absolute",
  },
  sauMtBa: {
    fontSize: 26,
    height: 96,
    width: 346,
    left: 0,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  title: {
    position: "absolute",
  },
  description: {
    top: 385,
    left: 42,
    height: 126,
    width: 346,
    position: "absolute",
  },
  startbtnChild: {
    borderRadius: 11111111,
    backgroundColor: Color.orangered_100,
    left: 0,
    top: 0,
  },
  btU: {
    top: 10,
    left: 133,
    fontSize: FontSize.size_lg,
  },
  startbtn: {
    left: 0,
    top: 0,
  },
  button: {
    top: 646,
    left: 49,
  },
  onboarding5: {
    flex: 1,
    width: "100%",
    height: 736,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default OnBoardingScreen;