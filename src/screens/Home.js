import * as React from "react";
import { useRef } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  FlatList,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Top, MenuTab, CardMuaNgay, CardKM } from "../components";
import { FontSize, Border, Color, Images } from "../contants";

const DATA = [
  {
    menuId: 1,
    name: "Crispy Chicken Burger",
    photo: Images.crispy_chicken_burger,
    description: "Burger with crispy chicken, cheese and lettuce",
    price: "80.000 đ",
  },
  {
    menuId: 2,
    name: "Burger gà giòn với mù tạt mật ong",
    photo: Images.honey_mustard_chicken_burger,
    description: "Burger gà giòn với xà lách trộn mù tạt mật ong",
    price: "99.000 đ",
  },
  {
    menuId: 3,
    name: "Khoai tây chiên giòn",
    photo: Images.baked_fries,
    description: "Khoai tây chiên giòn",
    price: "90.000 đ",
  },
];

const Home = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.homemain}>
        <Top />
        <View style={[styles.groupmonan, styles.listmonanLayout]}>
          <View style={[styles.monngontxt, styles.orderbtnLayout]}>
            <Text style={[styles.monNgonPhaiThu, styles.xemTypo]}>
              Món ngon phải thử
            </Text>
            <Text
              style={[styles.xemtatca, styles.xemTypo]}
            >{`Xem tất cả >>>`}</Text>
          </View>

          <View style={[styles.listmonan, styles.listmonanLayout]}>
            <FlatList
              data={DATA}
              horizontal
              renderItem={({ item }) => <CardMuaNgay/>}
              keyExtractor={(item) => item.menuId}
            />
          </View>
        </View>

        <View style={styles.groupkhuyenmai}>
          <View style={[styles.khuyenmaitext, styles.orderbtnLayout]}>
            <Text style={[styles.khuyenmaiSp, styles.xemTypo]}>
              Khuyến mãi sập sàn
            </Text>
            <Pressable
              style={styles.xemtatcaContainer}
              onPress={() => navigation.navigate("KhuyenMaiScreen")}
            >
              <Text
                style={[styles.xemtatca1, styles.xemTypo]}
              >{`Xem tất cả >>>`}</Text>
            </Pressable>
          </View>

          <View style={styles.listmonkm}>
            <FlatList
              data={DATA}
              renderItem={({ item }) => <CardKM />}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>

        <MenuTab />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  homemain: {
    backgroundColor: Color.chocolate,
    flex: 1,
    height: 1340,
    overflow: "hidden",
    width: "100%",
  },
  groupmonan: {
    top: 392,
    height: 286,
    left: 21,
    overflow: "hidden",
  },
  listmonanLayout: {
    width: 439,
    position: "absolute",
  },
  monngontxt: {
    width: 388,
    left: 8,
    top: 0,
  },
  orderbtnLayout: {
    height: 21,
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
  xemTypo: {
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    height: 21,
  },
  xemtatca: {
    left: 241,
    color: "#fffdfd",
    width: 147,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  xemtatcaContainer: {
    left: 255,
    top: 0,
    position: "absolute",
  },
  listmonanLayout: {
    width: "100%",
  },
  listmonan: {
    top: 49,
    height: "90%",
    left: 0,
  },
  groupkhuyenmai: {
    top: 764,
    left: 28,
    width: 377,
    height: 496,
    position: "absolute",
    overflow: "hidden",
  },
  khuyenmaitext: {
    width: 375,
    left: 2,
    top: 0,
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
  listmonkm: {
    top: 52,
    width: 371,
    height: "100%",
    left: 0,
    position: "absolute",
  },
});

export default Home;
