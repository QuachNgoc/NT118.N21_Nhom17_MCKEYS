import * as React from "react";
import { useState } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Button,
} from "react-native";
import { Images, Color, Border, FontSize } from "../contants";

const CardVoucher = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={[styles.monkhuyenmai, styles.khuyenmaiLayout]}>
      <View style={[styles.monkhuyenmaiChild, styles.khuyenmaiLayout]} />
      <Image
        style={[styles.imgIcon, styles.monNgonLayout]}
        resizeMode="cover"
        source={Images.SAMPLE_IMG}
      />
      <Text style={[styles.comboMonKhuyenMai, styles.giaTypo]}>
        Voucher số 1
      </Text>
      <Text style={[styles.gia, styles.giaLayout]}>Mã: XTGIYGSD</Text>
      <View style={[styles.orderbtn, styles.orderbtnLayout]}>
        <TouchableOpacity
          style={[styles.buttonIcon, styles.buttonPosition]}
          
        >
          <Text style={[styles.DatNgay, styles.DatNgayTypo]}>Áp Dụng</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={[styles.qrIcon]}
            onPress={() => setModalVisible(true)}
        >
            <Text style={{textAlign: "center", top: "15%"}}>QR</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.voucherpopup}>
            <View style={styles.voucherpopupChild} />

            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(false)}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: FontSize.size_lg,
                  top: -3,
                  width: "100%",
                }}
              >
                X
              </Text>
            </TouchableOpacity>

            <Text style={[styles.qrVoucher, styles.vuiLongTypo]}>
              QR Voucher
            </Text>
            <Image
              style={[styles.iconQrCode, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/images/qrcode_.png")}
            />
            <Text style={[styles.vuiLong, styles.vuiLongTypo]}>
              VUI LÒNG ĐƯA MÃ NÀY CHO NHÂN VIÊN THU NGÂN!!
            </Text>
            <Text style={[styles.thoiHan, styles.vuiLongTypo]}>
              Thời hạn: 3/4/2023
            </Text>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    qrIcon: {
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "#fd8d26",
        backgroundColor: Color.gray_900,
        borderRadius: Border.br_xl,
        left: "140%",
        top: -5,
        width: 48,
        height: 29
    },

  monkhuyenmai: {
    left: 2,
    top: 0,
  },
  khuyenmaiLayout: {
    height: 120,
    width: 369,
    // position: "absolute",
    marginTop: 10,
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
    top: "50%",
    left: 163,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    position: "absolute",
    color: Color.saddlebrown,
  },
  giaLayout: {
    height: 25,
    width: "100%",
  },
  orderbtn: {
    top: 93,
    left: "45%",
    width: 100,
  },
  orderbtnLayout: {
    height: 21,
    position: "absolute",
  },
  buttonIcon: {
    width: "140%",
    height: "140%",
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
    width: "100%",
    textAlign: "center",
    color: Color.white,
    left: 0,
  },
  DatNgayTypo: {
    fontSize: FontSize.size_lg,
    height: 20,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vuiLongTypo: {
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
  },
  voucherpopupChild: {
    top: "10%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.darkorange_100,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 2,
    width: "95%",
    left: "4%",
    position: "absolute",
    height: "70%",
  },
  qrVoucher: {
    top: "15%",
    left: 7,
    fontSize: 36,
    width: 399,
    height: 54,
    color: Color.black,
    textAlign: "center",
    fontWeight: "700",
  },
  iconQrCode: {
    height: "29.3%",
    width: "42.86%",
    top: "30%",
    right: "29.29%",
    bottom: "39.87%",
    left: "27.86%",
    position: "absolute",
  },
  vuiLong: {
    top: "64%",
    left: "8%",
    fontSize: FontSize.size_6xl,
    height: 88,
    color: Color.black,
    textAlign: "center",
    fontWeight: "700",
    width: "90%",
  },
  thoiHan: {
    top: "75%",
    fontSize: FontSize.size_base,
    color: Color.white,
    height: 22,
    textAlign: "center",
    fontWeight: "700",
    width: 414,
    left: 0,
  },
  voucherpopup: {
    flex: 1,
    overflow: "hidden",
    height: "50%",
    width: "100%",
  },
  button: {
    padding: 10,
    width: "10%",
    height: "5.5%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.darkorange_100,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 2,
    top: "11%",
    left: "88%",
  },
});
export default CardVoucher;
