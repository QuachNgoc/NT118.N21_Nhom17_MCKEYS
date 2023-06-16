import React, { useRef, useState } from 'react';
import {
   ScrollView,
   SafeAreaView,
   FlatList,
   StyleSheet,
   Image,
   View,
   Text,
   TextInput,
   TouchableOpacity,
   Button,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import { TopWithBackBtn, MenuTab } from '../components';
import { Color, Images } from '../contants';
import { Display } from '../utils';

const DATA = [
   {
      id: 1,
      url: Images.SAMPLE_IMG,
   },
   {
      id: 2,
      url: Images.SAMPLE_IMG,
   },
   {
      id: 3,
      url: Images.SAMPLE_IMG,
   },
   {
      id: 4,
      url: Images.SAMPLE_IMG,
   },
];

const ProductDetailScreen = () => {
   const [qty, setQty] = useState('1');
   const [variation, setVariation] = useState('');
   const [liked, setLiked] = useState(false);
   const flatListRef = useRef(null);

   const decreaseQty = () => {
      if (parseInt(qty) > 1) {
         setQty((parseInt(qty) - 1).toString());
      }
   };

   const increaseQty = () => {
      setQty((parseInt(qty) + 1).toString());
   };

   const addToFavorite = () => {
      setLiked(!liked);
   };

   const handleScrollEndDrag = (event) => {
      const velocityX = event.nativeEvent.velocity.x;
      const contentOffsetX = event.nativeEvent.contentOffset.x;
      const itemWidth = event.nativeEvent.layoutMeasurement.width;

      if (velocityX < 0) {
         const targetIndex = Math.floor(contentOffsetX / itemWidth) - 1;
         if (flatListRef.current && targetIndex >= 0) {
            flatListRef.current.scrollToIndex({
               animated: true,
               index: targetIndex,
            });
         }
      }
   };

   const handleNumberChange = (value) => {
      // Remove non-numeric characters from the input
      const numericValue = value.replace(/[^0-9]/g, '');
      setNumber(numericValue);
   };

   return (
      <SafeAreaView style={styles.container}>
         <ScrollView>
            <TopWithBackBtn
               title="Sản phẩm"
               hasTitle
               hasProfile
               goBack
            />

            {/* Products images slide */}
            <FlatList
               data={DATA}
               renderItem={(item) => (
                  <Image
                     style={styles.productImg}
                     source={Images.SAMPLE_IMG}
                     resizeMode="cover"
                  />
               )}
               keyExtractor={(item) => item.id}
               horizontal
               onScrollEndDrag={handleScrollEndDrag}
               pagingEnabled
               showsHorizontalScrollIndicator={false}
            />

            {/* Quantity input and Like button */}
            <View style={styles.qtyContainer}>
               <View style={styles.qtyWrapper}>
                  <TouchableOpacity
                     style={styles.qtyBtn}
                     onPress={decreaseQty}
                  >
                     <Icon
                        style={styles.qtyIcon}
                        name="minus"
                     />
                  </TouchableOpacity>
                  <TextInput
                     style={styles.qtyInput}
                     keyboardType="numeric"
                     value={qty}
                     onChangeText={handleNumberChange}
                  />
                  <TouchableOpacity
                     style={styles.qtyBtn}
                     onPress={increaseQty}
                  >
                     <Icon
                        style={styles.qtyIcon}
                        name="plus"
                     />
                  </TouchableOpacity>
               </View>
               <TouchableOpacity
                  style={styles.addToFavoriteWrapper}
                  onPress={addToFavorite}
               >
                  {liked ? (
                     <Icon
                        style={styles.addToFavoriteIconActive}
                        name="heart"
                     />
                  ) : (
                     <Icon
                        style={styles.addToFavoriteIcon}
                        name="hearto"
                     />
                  )}
               </TouchableOpacity>
            </View>

            {/* Name and Price */}
            <View style={styles.namePriceContainer}>
               <Text style={styles.name}>Burger Khoai Tây Chiên Salad</Text>
               <Text style={styles.price}>100.000đ</Text>
            </View>

            {/* Variation */}
            <View style={styles.variationContainer}>
               <Text style={styles.variationTxt}>Phân loại</Text>
               <View style={styles.variationRow}>
                  <TouchableOpacity
                     style={[styles.variationBtn, styles.variationBtnActive]}
                  >
                     <Text style={styles.variationBtnTxt}>S</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.variationBtn}>
                     <Text style={styles.variationBtnTxt}>M</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.variationBtn}>
                     <Text style={styles.variationBtnTxt}>L</Text>
                  </TouchableOpacity>
               </View>
            </View>

            <View style={styles.descContainer}>
               <Text style={styles.descTitle}>Mô tả sản phẩm</Text>
               <Text style={styles.descContent}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
               </Text>
               <Text style={styles.descContent}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
               </Text>
            </View>
         </ScrollView>
         <View style={styles.bottomBarContainer}>
            <TouchableOpacity style={[styles.bottomBarBtn, styles.cartBtn]}>
               <Text style={styles.bottomBarBtnTxt}>Thêm vào giỏ hàng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.bottomBarBtn, styles.payBtn]}>
               <Text style={styles.bottomBarBtnTxt}>Mua ngay</Text>
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   container: {
      height: '100%',
      width: '100%',
      paddingBottom: 61,
      backgroundColor: Color.LIGHT_GREY,
   },
   productImg: {
      height: Display.setWidth(100),
      width: Display.setWidth(100),
   },
   qtyContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      minHeight: 30,
   },
   qtyWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Color.SECONDARY_WHITE,
      width: '50%',
      borderRadius: 60,
      borderWidth: 1,
      borderColor: Color.DARK_FIVE,
      borderStyle: 'solid',
      position: 'absolute',
      top: -60,
      zIndex: 10,
   },
   qtyBtn: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
   },
   qtyInput: {
      fontSize: 40,
      minWidth: 100,
      textAlign: 'center',
      fontWeight: '400',
   },
   qtyIcon: {
      color: Color.DEFAULT_BLACK,
      padding: 8,
      fontSize: 24,
   },
   addToFavoriteWrapper: {
      position: 'absolute',
      left: 30,
      top: -57,
      zIndex: 10,
      padding: 4,
      borderRadius: 10,
      backgroundColor: Color.DEFAULT_WHITE,
   },
   addToFavoriteIcon: {
      fontSize: 40,
      fontWeight: '100',
   },
   addToFavoriteIconActive: {
      fontSize: 40,
      color: Color.DEFAULT_RED,
   },
   namePriceContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      paddingHorizontal: 20,
      paddingVertical: 10,
   },
   name: {
      fontSize: 26,
      fontWeight: '600',
      flex: 1,
   },
   price: {
      fontSize: 28,
      paddingBottom: 4,
      borderBottomColor: Color.DEFAULT_BLACK,
      borderBottomWidth: 2,
      borderStyle: 'solid',
      fontWeight: 'bold',
      color: Color.DEFAULT_YELLOW,
   },
   variationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 20,
      marginTop: 30,
   },
   variationTxt: {
      fontSize: 16,
      fontWeight: '600',
   },
   variationRow: {
      flexDirection: 'row',
   },
   variationBtn: {
      height: 40,
      width: 40,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: Color.DEFAULT_BLACK,
      marginLeft: 20,
   },
   variationBtnActive: {
      backgroundColor: Color.DEFAULT_YELLOW,
   },
   variationBtnTxt: {
      fontSize: 18,
   },
   descContainer: {
      marginHorizontal: 10,
      padding: 10,
      marginVertical: 20,
      backgroundColor: Color.LIGHT_YELLOW,
      borderRadius: 10,
   },
   descTitle: {
      fontSize: 18,
      fontWeight: 'bold',
   },
   descContent: {
      marginTop: 10,
   },
   bottomBarContainer: {
      position: 'absolute',
      bottom: 0,
      flexDirection: 'row',
      width: '100%',
      height: 61,
      alignItems: 'center',
   },
   bottomBarBtn: {
      height: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
   },
   bottomBarBtnTxt: {
      color: Color.DEFAULT_WHITE,
      fontSize: 18,
      textTransform: 'uppercase'
   },
   cartBtn: {
      backgroundColor: Color.DEFAULT_GREEN,
      flex: 1
   },
   payBtn: {
      backgroundColor: Color.DEFAULT_RED,
      paddingHorizontal: 15
   },
});

export default ProductDetailScreen;
