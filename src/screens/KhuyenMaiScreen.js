import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Top, MenuTab, CardKM } from "../components";
import { Color, Border, FontSize, Images } from "../contants";

const DATAKM = [
  {
    menuId: 1,
    name: "Hawaiian Pizza",
    photo: Images.hawaiian_pizza,
    description: "Thịt xông khói Canada, đế pizza nhà làm, sốt pizza",
    cur_price: "155.000 đ",
    //discounted_price: "125.000 đ"
  },
  {
    menuId: 2,
    name: "Kolo Mee",
    photo: Images.kolo_mee,
    description: "Mì xá xíu",
    cur_price: "55.000 đ",
    //discounted_price: "35.000 đ"
  },
  {
    menuId: 3,
    name: "Khoai tây chiên giòn",
    photo: Images.baked_fries,
    description: "Khoai tây chiên giòn",
    cur_price: "90.000 đ",
    //discounted_price: "75.000 đ"
  },
];

const KhuyenMaiScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.homemain}>
        <Top />
        <View style={styles.groupkhuyenmai}>
          <View style={[styles.khuyenmaitext]}>
            <Text style={[styles.khuyenmaiSp, styles.xemTypo]}>
              Khuyến mãi sập sàn
            </Text>
          </View>

          <Pressable
            style={styles.DoiDiem}
            onPress={() => navigation.navigate("DoiDiemScreen")}
          >
            <Text style={styles.DoiDiemtxt}>{`Đổi Điểm`}</Text>
          </Pressable>

          <View style={styles.listmonkm}>
            <FlatList
              data={DATAKM}
              renderItem={({ item }) => <CardKM props={item} />}
              keyExtractor={(item) => item.id}
            />
            {DATA.map(item => <CardKM key={item.id} />)}
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
    backgroundColor: "rgba(211, 118, 0, 0.8)",
    flex: 1,
    height: 1340,
    overflow: "hidden",
    width: "100%",
  },
  groupkhuyenmai: {
    top: "30%",
    left: 28,
    width: 377,
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  khuyenmaitext: {
    width: 375,
    left: 2,
    top: 3,
  },
  khuyenmaiSp: {
    width: 182,
    textAlign: "left",
    color: Color.white,
    left: 0,
    top: 0,
    position: "absolute",
  },
  xemTypo: {
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    height: 21,
  },
  DoiDiem: {
    height: 30,
    borderRadius: Border.br_xl,
    borderWidth: 2,
    backgroundColor: Color.orangered_100,
    borderColor: "#FD8D26",
    left: "68%",
    top: 0,
    width: 110,
    position: "absolute",
  },
  DoiDiemtxt: {
    fontSize: FontSize.size_mini,
    textAlign: "center",
    top: "20%",
    color: Color.white,
  },
  listmonkm: {
    top: 40,
    width: 371,
    height: 444,
    left: 0,
    position: "absolute",
  },
});
export default KhuyenMaiScreen;
