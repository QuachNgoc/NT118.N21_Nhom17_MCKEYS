import * as React from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Top, MenuTab, CardKM } from '../components';
import { Color, Border, FontSize, Images } from '../contants';
import { SafeAreaView } from 'react-native';

const DATAKM = [
   {
      menuId: 1,
      name: 'Hawaiian Pizza',
      photo: Images.hawaiian_pizza,
      description: 'Thịt xông khói Canada, đế pizza nhà làm, sốt pizza',
      cur_price: '155.000 đ',
      //discounted_price: "125.000 đ"
   },
   {
      menuId: 2,
      name: 'Kolo Mee',
      photo: Images.kolo_mee,
      description: 'Mì xá xíu',
      cur_price: '55.000 đ',
      //discounted_price: "35.000 đ"
   },
   {
      menuId: 3,
      name: 'Khoai tây chiên giòn',
      photo: Images.baked_fries,
      description: 'Khoai tây chiên giòn',
      cur_price: '90.000 đ',
      //discounted_price: "75.000 đ"
   },
];

const KhuyenMaiScreen = () => {
   const navigation = useNavigation();
   return (
      <SafeAreaView style={styles.container}>
         <ScrollView>
            <Top />
            <View style={styles.sectionContainer}>
               <View style={styles.flexContainer}>
                  <Text style={styles.sectionHeading}>Khuyến mãi sập sàn</Text>
                  <Pressable
                     style={styles.exchangePointBtn}
                     // onPress={() => navigation.navigate('DoiDiemScreen')}
                  >
                     <Text style={styles.exchangePointTxt}>{`Đổi Điểm`}</Text>
                  </Pressable>
               </View>
               <View>
                  {DATAKM.map((item) => (
                     <CardKM
                        key={item.menuId}
                        props={item}
                     />
                  ))}
               </View>
            </View>
         </ScrollView>
         <MenuTab />
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   container: {
      backgroundColor: 'rgba(211, 118, 0, 0.8)',
      flex: 1,
      overflow: 'hidden',
      width: '100%',
      paddingBottom: 61,
   },
   sectionContainer: {
      padding: 20,
   },
   sectionHeading: {
      fontSize: 18,
      color: Color.SECONDARY_WHITE,
      marginBottom: 20,
   },
   exchangePointBtn: {
    borderColor: Color.DEFAULT_RED,
    borderWidth: 2,
    borderStyle: 'solid',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: Color.DEFAULT_YELLOW,
   },
   exchangePointTxt: {
    paddingHorizontal: 4,
    color: Color.black
   },
   flexContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 5,
   },
});
export default KhuyenMaiScreen;
