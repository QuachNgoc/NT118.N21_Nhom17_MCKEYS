import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Images, Color, Border, FontSize } from "../contants";
import { useNavigation } from "@react-navigation/native";

const Top = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={Images.SAMPLE_IMG} style={styles.topPosition}>
      {/* search */}
      <View style={[styles.search, styles.searchLayout]}>
        <Image
          style={[styles.searchChild, styles.searchLayout]}
          resizeMode="cover"
          source={Images.SEARCH_LAYOUT}
        />

        <TouchableOpacity>
          <Image
            style={[styles.searchicon, styles.profileLayout]}
            resizeMode="contain"
            source={Images.SEARCHICON}
          />
        </TouchableOpacity>

        <TextInput
          style={styles.searchinput}
          placeholder="Tìm món ăn"
          keyboardType="default"
        />
      </View>

      <View style={[styles.topnav, styles.chuongLayout]}>
        {/* avatar */}
        <TouchableOpacity 
          style={[styles.profile, styles.profileLayout]}
          onPress={() => navigation.navigate("ProfileScreen")}
        >
          <Image
            style={[styles.avatarIcon, styles.profileLayout]}
            resizeMode="cover"
            source={Images.AVATAR}
          />
          <Text style={[styles.userName, styles.textTypo]}>Nguyen Van A</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.tichdiem, styles.tichdiemPosition]}
          onPress={() => navigation.navigate("DoiDiemScreen")}
        >
          <Image
            style={[styles.tichdiemChild, styles.buttonPosition]}
            resizeMode="cover"
            source={Images.RED_BTN}
          />
          <Text style={[styles.tichDiemtext, styles.DatNgayTypo]}>
            Tích điểm
          </Text>
        </TouchableOpacity>

        <View style={[styles.chuong, styles.chuongLayout]}>
          <TouchableOpacity style={[styles.chuongbg, styles.home1Layout]}>
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              resizeMode="cover"
              source={Images.BELL}
            />
          </TouchableOpacity>
          <View style={[styles.notify, styles.notifyLayout]}>
            <Image
              style={[styles.notifyChild, styles.notifyLayout]}
              resizeMode="cover"
              source={Images.CIRCLE}
            />
            <Text style={[styles.text6, styles.DatNgayTypo]}>11</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  topPosition: {
    height: 346,
    width: 414,
    left: 0,
    top: 20,
    position: "absolute",
  },
  searchLayout: {
    height: 49,
    width: 369,
    position: "absolute",
  },
  searchChild: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  searchicon: {
    right: 12,
    width: 32,
    height: 32,
    top: 9,
  },
  searchinput: {
    left: 14,
    top: 9,
    height: 32,
    position: "absolute",
  },
  search: {
    top: 91,
    left: 21,
  },
  profileLayout: {
    height: 32,
    position: "absolute",
  },
  topnav: {
    width: 379,
    top: 4,
    left: 21,
  },
  chuongLayout: {
    height: 51,
    position: "absolute",
  },
  profilesLayout: {
    width: 31,
    position: "absolute",
  },
  profile: {
    top: 14,
    width: 126,
    left: 0,
  },
  avatarIcon: {
    width: 32,
    height: 32,
    left: 0,
    top: 0,
    borderRadius: 20
  },
  userName: {
    top: 5,
    left: 40,
    width: 86,
    textAlign: "left",
    color: Color.white,
  },
  textTypo: {
    fontSize: FontSize.size_smi,
    fontWeight: "700",
    height: 21,
    position: "absolute",
  },
  tichdiemPosition: {
    left: 186,
    position: "absolute",
  },
  tichdiemChild: {
    width: 79,
    height: 27,
  },
  tichDiemtext: {
    width: 64,
    top: 4,
    left: 7,
    textAlign: "center",
    color: Color.white,
  },
  tichdiem: {
    top: 17,
    height: 25,
    width: 77,
  },
  buttonPosition: {
    left: -1,
    top: -5,
    borderRadius: Border.br_xl,
    position: "absolute",
    borderWidth: 1,
    backgroundColor: Color.orangered_200,
    borderColor: Color.darkorange_200,
    alignItems: "center",
  },
  DatNgayTypo: {
    fontSize: FontSize.size_xs,
    height: 16,
    fontWeight: "700",
    position: "absolute",
  },
  chuong: {
    left: 318,
    width: 61,
    top: 0,
  },
  chuongbg: {
    top: 6,
    borderRadius: 9,
    backgroundColor: Color.gray_800,
    borderColor: "#fdff9c",
    height: 45,
    borderWidth: 2,
    borderStyle: "solid",
    left: 0,
  },
  home1Layout: {
    width: 50,
    position: "absolute",
  },
  vectorIcon1: {
    height: "52.07%",
    width: "37.64%",
    top: "29.41%",
    right: "38.48%",
    bottom: "18.52%",
    left: "23.88%",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  notifyLayout: {
    height: 24,
    width: 27,
    top: 0,
    position: "absolute",
  },
  notifyChild: {
    left: 0,
  },
  text6: {
    width: 11,
    top: 4,
    color: Color.black,
    textAlign: "left",
    left: 8,
  },
  notify: {
    left: 34,
  },
});

export default Top;
