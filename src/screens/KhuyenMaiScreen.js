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
import { Color, Border, FontSize } from "../contants";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
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
              data={DATA}
              renderItem={({ item }) => <CardKM />}
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
    backgroundColor: Color.chocolate,
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
