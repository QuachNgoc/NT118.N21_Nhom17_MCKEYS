import * as React from "react";
import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Images, Color, Border, FontSize } from "../contants";


const handlePress = () => {};


const CardDoiDiem = () => {
  return (
    <View style={[styles.monkhuyenmai, styles.khuyenmaiLayout]}>
      <View style={[styles.monkhuyenmaiChild, styles.khuyenmaiLayout]} />
      <Image
        style={[styles.imgIcon, styles.monNgonLayout]}
        resizeMode="cover"
        source={Images.SAMPLE_IMG}
      />
      <Text style={[styles.comboMonKhuyenMai, styles.giaTypo]}>
        Combo món khuyến mãi số 1
      </Text>
      <Text style={[styles.gia, styles.giaLayout]}>999 điểm</Text>
      <View style={[styles.orderbtn, styles.orderbtnLayout]}>
        <TouchableOpacity
          style={[styles.buttonIcon, styles.buttonPosition]}
          onPress={handlePress}
        >
          <Text style={[styles.DatNgay, styles.DatNgayTypo]}>Đổi ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  monkhuyenmai: {
    left: 2,
    top: 0,
  },
  khuyenmaiLayout: {
    height: 120,
    width: 369,
    // position: "absolute",
    marginTop:10
  },
  monkhuyenmaiChild: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#fd8d26",
    backgroundColor: Color.gray_900,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  imgIcon: {
    top: "13%",
    height: "90%",
    left: 7,
    borderRadius: Border.br_xl,
  },
  monNgonLayout: {
    width: 141,
    position: "absolute",
  },
  comboMonKhuyenMai: {
    top: 27,
    width: 185,
    height: 50,
    color: Color.black,
  },
  giaTypo: {
    left: 163,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    position: "absolute",
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
  giaLayout: {
    height: 25,
    width: 77,
  },
  orderbtn: {
    top: 93,
    left: 254,
    width: 101,
  },
  orderbtnLayout: {
    height: 21,
    position: "absolute",
  },
  buttonIcon: {
    width: 102,
    height: 23,
    backgroundColor: Color.orangered_200,
  },
  buttonPosition: {
    left: -1,
    top: -5,
    borderRadius: Border.br_xl,
    position: "absolute",
    borderWidth: 1,
    borderColor: Color.darkorange_200,
    alignItems: "center",
  },
  DatNgay: {
    top: 2,
    width: 101,
    textAlign: "center",
    color: Color.black,
    left: 0,
  },
  DatNgayTypo: {
    fontSize: FontSize.size_xs,
    height: 16,
    fontWeight: "700",
    position: "absolute",
  },
});
export default CardDoiDiem;