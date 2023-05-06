import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
} from "react-native";
import { FontSize, Color, Border, Images } from "../contants";

const Top = () => {
  return (
    <View style={styles.topPosition}>
      <ImageBackground source={Images.SAMPLE_IMG} style={styles.topPosition}>
        <View style={[styles.search, styles.searchLayout]}>
          <Image
            style={[styles.searchChild, styles.searchLayout]}
            resizeMode="cover"
            source={Images.SEARCH_LAYOUT}
          />
          <Image
            style={[styles.searchicon, styles.profileLayout]}
            resizeMode="cover"
            source={Images.SEARCHICON}
          />
          <TextInput
            style={styles.searchinput}
            placeholder="Tìm món ăn"
            keyboardType="default"
          />
        </View>
        <View style={[styles.topnav, styles.chungLayout]}>
          <View style={[styles.profile, styles.profileLayout]}>
            <Image
              style={[styles.avatarIcon, styles.profileLayout]}
              resizeMode="cover"
              source={Images.AVATAR}
            />
            <Text style={[styles.ngocQuach, styles.textTypo]}>Ngoc Quach</Text>
          </View>
          <View style={[styles.tichdiem, styles.tichdiemPosition]}>
            <Image
              style={[styles.tichdiemChild, styles.uploadImgIconPosition]}
              resizeMode="cover"
              source={Images.RED_BTN}
            />
            <Text style={[styles.tchIm, styles.tNgayTypo]}>Tích điểm</Text>
          </View>
          <View style={[styles.chung, styles.chungLayout]}>
            <View style={[styles.chuongbg, styles.home1Layout]} />
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              resizeMode="cover"
              source={Images.BELL}
            />
            <View style={[styles.notify, styles.notifyLayout]}>
              <Image
                style={[styles.notifyChild, styles.notifyLayout]}
                resizeMode="cover"
                source={Images.CIRCLE}
              />
              <Text style={[styles.text6, styles.tNgayTypo]}>11</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  listmonanLayout: {
    width: 439,
    position: "absolute",
  },
  orderbtnLayout: {
    height: 21,
    position: "absolute",
  },
  xemTypo: {
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    height: 21,
  },
  monNgonLayout: {
    width: 141,
    position: "absolute",
  },
  childBorder: {
    borderWidth: 2,
    borderStyle: "solid",
  },
  mnNItemPosition: {
    height: 96,
    left: 10,
    top: 13,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  wrapperPosition: {
    height: 42,
    top: 196,
    left: 10,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_smi,
    fontWeight: "700",
    height: 21,
    position: "absolute",
  },
  iconfeatherIconLayout1: {
    height: 16,
    width: 16,
    position: "absolute",
    overflow: "hidden",
  },
  khuyenmaiLayout: {
    height: 138,
    width: 369,
    position: "absolute",
  },
  giaTypo: {
    left: 163,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  giaLayout: {
    height: 25,
    width: 77,
  },
  uploadImgIconPosition: {
    left: -1,
    top: -1,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  tNgayTypo: {
    fontSize: FontSize.size_xs,
    height: 16,
    fontWeight: "700",
    position: "absolute",
  },
  topPosition: {
    height: 330,
    width: 414,
    left: 0,
    top: 10,
    position: "absolute",
  },
  searchLayout: {
    height: 49,
    width: 369,
    position: "absolute",
  },
  profileLayout: {
    height: 32,
    position: "absolute",
  },
  chungLayout: {
    height: 51,
    position: "absolute",
  },
  tichdiemPosition: {
    left: 186,
    position: "absolute",
  },
  home1Layout: {
    width: 50,
    position: "absolute",
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
  groupChildLayout: {
    width: 125,
    height: 39,
    position: "absolute",
  },
  menuPosition: {
    width: 21,
    left: 0,
    position: "absolute",
  },
  salesTypo: {
    height: 11,
    color: Color.orangered_100,
    fontSize: FontSize.size_7xs,
    textAlign: "left",
    fontWeight: "700",
    top: 0,
  },
  iconfeatherIconLayout: {
    height: 22,
    width: 22,
    position: "absolute",
  },
  nHngLayout: {
    width: 23,
    position: "absolute",
  },
  profilesLayout: {
    width: 31,
    position: "absolute",
  },
  breakpageIcon: {
    top: 735,
    left: 32,
    width: 351,
    height: 1,
    position: "absolute",
  },
  monNgonPhaiThu: {
    width: 198,
    textAlign: "left",
    color: Color.white,
    left: 0,
    top: 0,
    position: "absolute",
  },
  xemtatca: {
    left: 241,
    color: "#fffdfd",
    width: 147,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  monngontxt: {
    width: 388,
    left: 8,
    top: 0,
  },
  mnNChild: {
    borderColor: "#fd8d26",
    backgroundColor: Color.gray_900,
    borderWidth: 2,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    width: 141,
    position: "absolute",
    height: 237,
  },
  mnNItem: {
    width: 121,
  },
  mnNRt: {
    top: 121,
    height: 39,
    width: 119,
    textAlign: "center",
    color: Color.black,
    fontSize: FontSize.size_smi,
    left: 11,
    fontWeight: "700",
    position: "absolute",
  },
  mnNInner: {
    borderRadius: Border.br_3xs,
    width: 121,
  },
  text: {
    top: 160,
    color: Color.saddlebrown,
    width: 119,
    textAlign: "center",
    left: 11,
    fontSize: FontSize.size_smi,
  },
  muaNgay: {
    top: 207,
    left: 20,
    color: Color.gray_100,
    width: 77,
    textAlign: "center",
    fontSize: FontSize.size_smi,
    fontWeight: "700",
    height: 21,
    position: "absolute",
  },
  iconfeatherIcon: {
    top: 210,
    left: 97,
  },
  mnN: {
    height: 237,
    left: 0,
    top: 0,
  },
  vectorIcon: {
    width: 119,
  },
  mnNChild1: {
    borderRadius: Border.br_3xs,
    width: 119,
  },
  iconfeatherIcon1: {
    top: 651,
    left: 416,
  },
  mnN1: {
    left: 298,
    height: 237,
    top: 0,
  },
  icon: {
    height: "100%",
    borderRadius: Border.br_3xs,
    width: "100%",
  },
  wrapper: {
    width: 121,
  },
  mnN2: {
    left: 149,
    height: 237,
    top: 0,
  },
  listmonan: {
    top: 49,
    height: 237,
    left: 0,
  },
  groupmonan: {
    top: 392,
    height: 286,
    left: 21,
  },
  khuyenmaiSp: {
    width: 182,
    textAlign: "left",
    color: Color.white,
    left: 0,
    top: 0,
    position: "absolute",
  },
  xemtatca1: {
    width: 120,
    textAlign: "left",
    color: Color.white,
  },
  xemtatcaContainer: {
    left: 255,
    top: 0,
    position: "absolute",
  },
  khuyenmaitext: {
    width: 375,
    left: 2,
    top: 0,
  },
  mnkhuyenmaiChild: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#fd8d26",
    backgroundColor: Color.gray_900,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  imgIcon: {
    top: 8,
    height: 124,
    left: 7,
    borderRadius: Border.br_xl,
  },
  comboMnKhuyn: {
    top: 27,
    width: 184,
    height: 48,
    color: Color.black,
  },
  gia: {
    top: 91,
    left: 163,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    position: "absolute",
    color: Color.saddlebrown,
  },
  uploadImgIcon: {
    width: 102,
    height: 23,
  },
  tNgay: {
    top: 2,
    width: 101,
    textAlign: "center",
    color: Color.black,
    left: 0,
  },
  orderbtn: {
    top: 93,
    left: 254,
    width: 101,
  },
  mnkhuyenmai: {
    left: 2,
    top: 0,
  },
  mnkhuyenmai1: {
    top: 153,
    left: 2,
  },
  mnkhuyenmai2: {
    top: 306,
    left: 0,
  },
  listmonkm: {
    top: 52,
    width: 371,
    height: 444,
    left: 0,
    position: "absolute",
  },
  groupkhuyenmai: {
    top: 764,
    left: 28,
    width: 377,
    height: 496,
    position: "absolute",
  },
  sliderimg: {
    borderColor: "#fff",
    borderWidth: 2,
    borderStyle: "solid",
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
    top: "1%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  search: {
    top: 91,
    left: 21,
  },
  avatarIcon: {
    width: 32,
    height: 32,
    left: 0,
    top: 0,
  },
  ngocQuach: {
    top: 5,
    left: 40,
    width: 86,
    textAlign: "left",
    color: Color.white,
  },
  profile: {
    top: 14,
    width: 126,
    left: 0,
  },
  tichdiemChild: {
    width: 79,
    height: 27,
  },
  tchIm: {
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
  vectorIcon1: {
    height: "52.07%",
    width: "37.64%",
    top: "29.41%",
    right: "38.48%",
    bottom: "18.52%",
    left: "23.88%",
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
  chung: {
    left: 318,
    width: 61,
    top: 0,
  },
  topnav: {
    width: 379,
    top: 4,
    left: 21,
  },
  homemain: {
    backgroundColor: Color.chocolate,
    flex: 1,
    height: 1340,
    overflow: "hidden",
    width: "100%",
  },
});

export default Top;
