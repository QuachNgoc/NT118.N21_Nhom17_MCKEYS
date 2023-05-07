import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Images, Color, Border, FontSize } from "../contants";

const CardDonHang = () => {
  return (
    <View style={[styles.sanPhamTrongGioHang, styles.sanphamLayout]}>

      <TouchableOpacity style={[styles.delbtn, styles.delbtnChild]}>
        <Text style={styles.delete}>Delete</Text>
      </TouchableOpacity>

      <View
        style={[
          styles.sanPhamTrongGioHangChild,
          styles.sanPhamTrongGioHangChildPosition,
        ]}
      >
        <View style={[styles.plus, styles.plusLayout]}>
          <View style={styles.plusChild}>
            <TouchableOpacity style={styles.plusChildBorder}>
              <Icon
                name="plus"
                size={20}
                color="#000"
                style={styles.plusInner}
              />
            </TouchableOpacity>

            <Text style={[styles.soLuongSP, styles.themTypo]}>03</Text>

            <TouchableOpacity style={styles.plusChildBorder}>
              <Icon
                name="minus"
                size={20}
                color="#000"
                style={styles.minusInner}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={[styles.sanphamText, styles.sanphamTypo]}>
          Món ăn trong giỏ hàng
        </Text>
        <Text style={[styles.giaTrongGioHang, styles.giaTrongGioHangTypo]}>
          54.000đ
        </Text>
        <Image
          style={styles.hinhSanPham}
          resizeMode="cover"
          source={Images.SAMPLE_IMG}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sanPhamTrongGioHangChild: {
    width: "78%",
    height: "120%",
  },
  sanPhamTrongGioHang: {
    height: 10,
    left: 1,
    top: 0,
    marginTop: "5%"
  },
  sanphamLayout: {
    width: "100%",
    height: 68,
  },
  delbtnChild: {
    borderRadius: Border.br_3xs,
    borderWidth: 2,
    borderColor: "#FF3D00",
  },
  delbtn: {
    top: 0,
    left: "80%",
    width: "20%",
    height: "120%",
    backgroundColor: "#FF3D00",
    marginTop: 10
  },
  delete: {
    top: "35%",
    left: 0,
    width: "100%",
    height: "100%",
    fontSize: FontSize.size_lg,
    textAlign: "center",
    color: Color.white,
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
  plusChildBorder: {
    borderColor: "#000",
    borderStyle: "solid",
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
  soLuongSP: {
    left: "1%",
    width: "100%",
    height: "100%",
    top: 1,
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
  },
  plusItem: {
    left: 6,
    width: 11,
    height: 2,
    borderTopWidth: 2,
    position: "absolute",
    top: 7,
  },
  plusInner: {
    top: 1,
    left: "75%",
    position: "absolute",
  },
  minusInner: {
    top: 1,
    left: "10%",
    position: "absolute",
  },
  sanphamText: {
    width: "100%",
    height: "100%",
  },
  sanphamTypo: {
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    top: 16,
    left: 83,
    color: Color.black,
    textAlign: "left",
  },
  giaTrongGioHang: {
    top: "61%",
    left: 83,
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

export default CardDonHang;
