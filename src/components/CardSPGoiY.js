import { StyleSheet, Text, View, Image, TouchableOpacity,StatusBar  } from "react-native";
import React from "react";
import { Images, Color, Border, FontSize } from "../contants";

const CardSPGoiY = () => {
  return (
    <View style={[styles.sanPhamTrongGioHang, styles.sanphamLayout]}>
      <View
        style={[
          styles.sanPhamTrongGioHangChild,
          styles.sanPhamTrongGioHangChildPosition,
        ]}
      >
        <Text style={[styles.sanphamText, styles.sanphamTypo]}>
          Sản phẩm gợi ý
        </Text>
        <Text style={[styles.giaTrongGioHang, styles.giaTrongGioHangTypo]}>
          54.000đ
        </Text>
        <Image
          style={styles.hinhSanPham}
          resizeMode="cover"
          source={Images.SAMPLE_IMG}
        />
        <View style={[styles.plus, styles.plusLayout]}>
          <TouchableOpacity style={styles.plusChild}>
            <Text style={styles.themTypo}>Thêm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sanPhamTrongGioHangChild: {
    width: "70%",
    height: "120%",
  },
  sanPhamTrongGioHang: {
    height: 10,
    left: 0,
    top: "30%",
    
  },
  sanphamLayout: {
    width: "140%",
    height: 68,
  },
  sanPhamTrongGioHangChildPosition: {
    backgroundColor: Color.gainsboro_600,
    borderRadius: Border.br_3xs,
    top: "-120%",
    left: 0,
  },
  plus: {
    right: "5%",
    top: "60%",
    position: "absolute",
  },
  plusLayout: {
    width: 77,
    height: 15,
  },
  plusChild: {
    backgroundColor: Color.darkorange_200,
    borderRadius: Border.br_21xl,
    right: 0,
    borderColor: "#000",
    top: 0,
    borderWidth: 1,
    width: "130%",
    height: "150%",
    position: "absolute",
  },
  themTypo: {
    justifyContent: "center",
    fontSize: FontSize.size_mini,
    color: Color.black,
    textAlign: "center",
    fontWeight: "700",
    alignItems: "center",
    display: "flex",
    position: "absolute",
    width: "100%",
  },
  sanphamText: {
    width: "100%",
    height: "100%",
  },
  sanphamTypo: {
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    top: 16,
    left: 92,
    color: Color.black,
    textAlign: "left",
  },
  giaTrongGioHang: {
    top: "61%",
    left: 92,
    height: "100%",
    width: "100%",
  },
  giaTrongGioHangTypo: {
    fontSize: FontSize.size_lg,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  hinhSanPham: {
    width: "27%",
    height: "100%",
    position: "absolute",
    borderRadius: Border.br_3xs,
    borderWidth: 2,
    borderColor: Color.orangered_100,
    top: 0,
    left: 0,
  },
});

export default CardSPGoiY;
