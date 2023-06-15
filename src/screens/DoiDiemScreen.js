import * as React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Top, MenuTab, CardDoiDiem, CardVoucher } from '../components';
import { Color, Border, FontSize } from '../contants';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const DATA1 = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
];

const DoiDiemScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.homemain}>
          <Top />

          <View style={styles.groupkhuyenmai}>
            <View style={[styles.khuyenmaitext, styles.orderbtnLayout]}>
              <Text style={[styles.khuyenmaiSp, styles.xemTypo]}>
                Đổi thưởng
              </Text>
              <Text
                style={[styles.xemtatca1, styles.xemTypo]}
              >{`Điểm: 99 điểm`}</Text>
            </View>

            <View style={styles.listmonkm}>
              {/* <FlatList
                data={DATA}
                renderItem={({ item }) => <CardDoiDiem />}
                keyExtractor={(item) => item.id}
              /> */}
              {DATA.map(item => <CardDoiDiem key={item.id} />)}
            </View>
          </View>

          <View style={styles.groupVoucher}>
            <View style={[styles.khuyenmaitext, styles.orderbtnLayout]}>
              <Text style={[styles.khuyenmaiSp, styles.xemTypo]}>Voucher</Text>
            </View>

            <View style={styles.listmonkm}>
              {DATA.map(item => <CardVoucher key={item.id} />)}
              {/* <FlatList
                data={DATA1}
                renderItem={({ item }) => <CardVoucher />}
                keyExtractor={(item) => item.id}
              /> */}
            </View>
          </View>
        </View>
      </ScrollView>
      
      <MenuTab />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homemain: {
    backgroundColor: "rgba(211, 118, 0, 0.8)",
    flex: 1,
    height: 1340,
    overflow: 'hidden',
    width: '100%',
  },
  listmonkm: {
    top: 30,
    width: 371,
    height: '100%',
    left: 0,
    position: 'absolute',
  },
  groupVoucher: {
    top: '65%',
    left: 28,
    width: 377,
    height: 496,
    position: 'absolute',
    overflow: 'hidden',
  },
  groupkhuyenmai: {
    top: '30%',
    left: 28,
    width: 377,
    height: 496,
    position: 'absolute',
    overflow: 'hidden',
  },
  khuyenmaitext: {
    width: 375,
    left: 2,
    top: 0,
  },
  orderbtnLayout: {
    height: 21,
    position: 'absolute',
  },
  khuyenmaiSp: {
    width: 182,
    textAlign: 'left',
    color: Color.white,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  xemTypo: {
    fontWeight: '700',
    fontSize: FontSize.size_lg,
    // textAlign: "right",
    height: 20,
  },
  xemtatca1: {
    width: '99%',
    textAlign: 'right',
    color: Color.white,
  },
});

export default DoiDiemScreen;
