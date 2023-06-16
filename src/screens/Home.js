import * as React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Pressable,
   SafeAreaView,
   FlatList,
   ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Top, MenuTab, CardMuaNgay, CardKM } from '../components';
import { FontSize, Color, Images } from '../contants';

const DATA = [
   {
      menuId: 1,
      name: 'Crispy Chicken Burger',
      photo: Images.crispy_chicken_burger,
      description: 'Burger with crispy chicken, cheese and lettuce',
      price: '80.000 đ',
   },
   {
      menuId: 2,
      name: 'Burger gà giòn với mù tạt mật ong',
      photo: Images.honey_mustard_chicken_burger,
      description: 'Burger gà giòn với xà lách trộn mù tạt mật ong',
      price: '99.000 đ',
   },
   {
      menuId: 3,
      name: 'Khoai tây chiên giòn',
      photo: Images.baked_fries,
      description: 'Khoai tây chiên giòn',
      price: '90.000 đ',
   },
];

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

const Home = () => {
   const navigation = useNavigation();

   return (
      <SafeAreaView>
         <ScrollView>
            <View style={styles.container}>
               {/* Top bar */}
               <Top />

               {/* Món ngon phải thử */}
               <View style={styles.sectionContainer}>
                  <Text style={styles.sectionHeading}>Món ngon phải thử</Text>
                  <FlatList
                     data={DATA}
                     horizontal
                     showsHorizontalScrollIndicator={false}
                     renderItem={({ item }) => <CardMuaNgay props={item} />}
                     keyExtractor={(item) => item.menuId}
                  />
               </View>

               {/* Khuyến mãi sập sàn */}
               <View style={styles.sectionContainer}>
                  <View style={styles.flexContainer}>
                     <Text style={styles.sectionHeading}>
                        Khuyến mãi sập sàn
                     </Text>
                     <Pressable
                        // onPress={() => navigation.navigate('KhuyenMaiScreen')}
                     >
                        <Text style={styles.sectionLinkTxt}>{`Xem tất cả >>>`}</Text>
                     </Pressable>
                  </View>

                  <View>
                     <FlatList
                        data={DATA}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => <CardMuaNgay props={item} />}
                        keyExtractor={(item) => item.id}
                     />
                  </View>
               </View>

               {/* Khuyến mãi sập sàn 2 */}
               <View style={styles.sectionContainer}>
                  <View style={styles.flexContainer}>
                     <Text style={styles.sectionHeading}>Khuyến mãi sập sàn</Text>
                     <Pressable
                        onPress={() => navigation.navigate('KhuyenMaiScreen')}
                     >
                        <Text style={styles.sectionLinkTxt}>{`Xem tất cả >>>`}</Text>
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
      paddingBottom: 61
   },
   sectionContainer: {
      padding: 20,
   },
   sectionHeading: {
      fontSize: 18,
      color: Color.SECONDARY_WHITE,
      marginBottom: 20,
   },
   sectionLinkTxt: {
      color: Color.LIGHT_YELLOW,
      marginTop: 5
   },
   flexContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 5
   },
});

export default Home;
