import * as React from "react";
import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Images, Color, Border, FontSize } from "../contants";
import { useNavigation } from "@react-navigation/native";

const CardMuaNgay = ({props}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.monNgonLayout}>
      <View style={[styles.monNgonChild, styles.childBorder]} />
      <Image
        style={styles.monNgonItemPosition}
        resizeMode="cover"
        source={props.photo}
      />
      <Text style={styles.monAnRatNgon}>{props.name}</Text>
      <Text style={[styles.text, styles.textTypo]}>{props.price}</Text>

      <TouchableOpacity
        style={styles.buybtnChild}
        onPress={() => navigation.push("OrderScreen")}
      >
        <Text style={[styles.muaNgay, styles.muaTypo]}>Mua ngay</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  monNgonLayout: {
    left: 0,
    top: 0,
    marginLeft: 10
  },
  monNgonChild: {
    borderColor: "#fd8d26",
    backgroundColor: Color.gray_900,
    borderWidth: 2,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    width: 141,
    height: 237,
  },
  childBorder: {
    borderWidth: 2,
    borderStyle: "solid",
  },
  monNgonItemPosition: {
    height: 96,
    width: "90%",
    left: 6,
    top: 13,
    borderRadius: Border.br_xl,
    position: "absolute"
  },
  monAnRatNgon: {
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
  text: {
    top: 160,
    color: Color.saddlebrown,
    width: 119,
    textAlign: "center",
    left: 11,
  },
  textTypo: {
    fontSize: FontSize.size_smi,
    fontWeight: "700",
    height: 21,
    position: "absolute",
  },
  buybtnChild: {
    height: 40,
    borderRadius: Border.br_3xs,
    borderWidth: 2,
    backgroundColor: Color.orangered_100,
    borderColor: Color.orangered_200,
    left: 7,
    top: "76%",
    width: 125,
    position: "absolute",
  },
  muaNgay: {
    top: 8,
    alignItems: "center"
  },
  muaTypo: {
    width: "100%",
    color: Color.gray_100,
    textAlign: "center",
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    height: 21,
    position: "absolute",
  },
});
export default CardMuaNgay;
