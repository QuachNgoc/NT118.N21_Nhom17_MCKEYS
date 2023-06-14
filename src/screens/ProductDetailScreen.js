import React, { useRef, useState } from 'react';
import {
   ScrollView,
   SafeAreaView,
   FlatList,
   StyleSheet,
   Image,
   Text,
} from 'react-native';
import { Topbar, MenuTab } from '../components';
import { Images } from '../contants';
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
   const [qty, setQty] = useState(1);
   const flatListRef = useRef(null);

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

   return (
      <SafeAreaView style={styles.container}>
         <ScrollView>
            <Topbar
               title="Sản phẩm"
               hasTitle
               hasProfile
               goBack
               btnTitle="Quay lại"
            />
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
         </ScrollView>
         <MenuTab />
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   container: {
      height: '100%',
      width: '100%',
   },
   productImg: {
      height: Display.setWidth(100),
      width: Display.setWidth(100),
   },
});

export default ProductDetailScreen;
