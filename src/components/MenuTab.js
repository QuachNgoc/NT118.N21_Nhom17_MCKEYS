import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { Color, FontSize, Border } from "../contants";
import { useNavigation } from "@react-navigation/native";

const MenuTab = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.menuTab, styles.homeLayout]}>
      <Image
        style={styles.homeChild}
        resizeMode="cover"
        source={require("../../assets/images/menutabBG.png")}
      />
      <TouchableOpacity 
        style={[styles.home, styles.homeLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Text style={styles.home1}>Home</Text>
          <Image
            style={styles.iconlucideIcon}
            resizeMode="cover"
            source={require("../../assets/images/LucideIcon.png")}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.menuitem}>
        <View style={[styles.menu, styles.menuPosition]}>
          <Text style={[styles.menu1, styles.salesTypo]}>MENU</Text>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../../assets/images/Vector1.png")}
          />
        </View>
        <View style={styles.khuyenmai}>
          <Text style={[styles.sales, styles.salesTypo]}>SALES</Text>
          <Image
            style={[styles.khuyenmaiChild, styles.iconfeatherIconLayout]}
            resizeMode="cover"
            source={require("../../assets/images/Ellipse3.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../../assets/images/Vector.png")}
          />
        </View>
        <View style={[styles.nHng, styles.DatHangLayout]}>
          <Image
            style={[styles.iconfeatherIcon, styles.iconfeatherIconLayout]}
            resizeMode="cover"
            source={require("../../assets/images/packIcon.png")}
          />
          <Text style={[styles.sales1, styles.DatHangLayout]}>PACKS</Text>
        </View>
        <View style={[styles.profiles, styles.profilesLayout]}>
          <Image
            style={[styles.iconfeatherIcon1, styles.iconfeatherIconLayout]}
            resizeMode="cover"
            source={require("../../assets/images/FeatherIcon.png")}
          />
          <Text style={[styles.profiles1, styles.profilesLayout]}>
            PROFILES
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeLayout: {
    height: 61,
    width: 414,
  },
  groupChildLayout: {
    height: 39,
    width: 125,
    position: "absolute",
  },
  menuPosition: {
    width: 21,
    left: 0,
    position: "absolute",
  },
  salesTypo: {
    height: 11,
    color: Color.lightgray,
    fontWeight: "700",
    fontSize: FontSize.size_7xs,
    textAlign: "left",
    top: 0,
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  iconfeatherIconLayout: {
    height: 22,
    width: 22,
    position: "absolute",
  },
  DatHangLayout: {
    width: 23,
    position: "absolute",
  },
  profilesLayout: {
    width: 31,
    position: "absolute",
  },
  homeChild: {
    top: -9,
    left: -13,
    width: 440,
    height: 87,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_2xs,
    backgroundColor: Color.lightgray,
    left: 0,
    top: 0,
  },
  home1: {
    top: 10,
    left: 56,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    color: Color.white,
    display: "flex",
    alignItems: "center",
    width: 50,
    textAlign: "left",
    position: "absolute",
  },
  iconlucideIcon: {
    top: 7,
    width: 30,
    height: 26,
    overflow: "hidden",
    left: 17,
    position: "absolute",
  },
  rectangleParent: {
    left: 17,
    top: 11,
  },
  home: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  menu1: {
    width: 21,
    left: 0,
    position: "absolute",
  },
  vectorIcon: {
    height: "61.11%",
    width: "85.25%",
    top: "38.89%",
    right: "14.75%",
    bottom: "0%",
    left: "0%",
  },
  menu: {
    height: 36,
    top: 1,
  },
  sales: {
    width: 25,
    left: 2,
    position: "absolute",
  },
  khuyenmaiChild: {
    top: 13,
    height: 22,
    width: 22,
    left: 0,
  },
  vectorIcon1: {
    height: "28.35%",
    width: "42.28%",
    top: "54.29%",
    right: "38.34%",
    bottom: "17.36%",
    left: "19.38%",
  },
  khuyenmai: {
    left: 57,
    width: 27,
    height: 35,
    top: 0,
    position: "absolute",
  },
  iconfeatherIcon: {
    top: 12,
    overflow: "hidden",
    left: 0,
  },
  sales1: {
    height: 11,
    color: Color.lightgray,
    fontWeight: "700",
    fontSize: FontSize.size_7xs,
    textAlign: "left",
    top: 0,
    left: 0,
  },
  nHng: {
    left: 120,
    height: 34,
    top: 1,
  },
  iconfeatherIcon1: {
    top: 13,
    height: 22,
    width: 22,
    left: 2,
    overflow: "hidden",
  },
  profiles1: {
    height: 11,
    color: Color.lightgray,
    fontWeight: "700",
    fontSize: FontSize.size_7xs,
    textAlign: "left",
    top: 0,
    left: 0,
  },
  profiles: {
    left: 178,
    height: 35,
    top: 1,
  },
  menuitem: {
    left: 186,
    width: 209,
    height: 37,
    top: 11,
    position: "absolute",
  },
  menuTab: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,

    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default MenuTab;
