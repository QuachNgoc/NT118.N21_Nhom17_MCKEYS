import * as React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Top, MenuTab, CardDonHang, CardSPGoiY } from "../components";
import { Color, Border, FontSize, Images } from "../contants";
import { useState } from "react";
import GoBackBtn from '../components/GoBackBtn';

const DATA = [
  {
    id: "1",
    name: "Crispy Chicken Burger",
    photo: Images.crispy_chicken_burger,
    description: "Burger with crispy chicken, cheese and lettuce",
    price: "80.000 đ",
    isDiscounted: true,
    discounted_price: "67.000 đ",
    freeship: true,
    shipPrice: "15.000 đ",
  },
  {
    id: "2",
    name: "Burger gà giòn với mù tạt mật ong",
    photo: Images.honey_mustard_chicken_burger,
    description: "Burger gà giòn với xà lách trộn mù tạt mật ong",
    price: "99.000 đ",
    isDiscounted: true,
    discounted_price: "67.000 đ",
    freeship: true,
    shipPrice: "15.000 đ",
  },
];

const DonHangScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.homemain}>
        <Text style={[styles.donHang, styles.donHangTypo]}>
          Đơn hàng của tôi
        </Text>
            <View style={styles.donhanglist}>
               {/* <FlatList
            data={DATA}
            renderItem={({ item }) => <CardDonHang />}
            keyExtractor={(item) => item.id}
          /> */}
               {DATA.map((item) => (
                  <CardDonHang key={item.id} />
               ))}
            </View>

            <Text style={[styles.spGoiY, styles.spGoiYTypo]}>
               Sản phẩm gợi ý
            </Text>

            <View style={styles.groupspgoiy}>
               <FlatList
                  data={DATA}
                  horizontal={true}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => <CardSPGoiY />} // render your component here
                  pagingEnabled={true} // Snap to the nearest item when scrolling ends
               />
            </View>

            <View style={styles.thanhtoancontainer}>
               <Text style={styles.text}>375.000đ</Text>
               <Text style={[styles.text1, styles.textTypo1]}>390.000đ</Text>
               <Text style={[styles.free, styles.textTypo1]}>Free</Text>
               <Text style={[styles.text2, styles.textTypo1]}>-15.000đ</Text>
               <Text
                  style={[styles.tongthanhToan, styles.tongthanhToanPosition]}
               >
                  Tổng thanh toán
               </Text>
               <View
                  style={[
                     styles.thanhtoancontainerChild,
                     styles.plusItemLayout,
                  ]}
               />
               <Text style={styles.phiShip}>Phí ship</Text>
               <Text style={[styles.giamGia, styles.tongTypo]}>Giảm giá</Text>
               <Text style={[styles.tong, styles.tongTypo]}>Tổng</Text>
            </View>

            {/* Đổi thành Touch nha */}
            <TouchableOpacity
               style={[styles.thanhtoanbtn, styles.thanhtoanbtnLayout]}
            >
               <View style={[styles.thanhtoanbtnChild, styles.childPosition]} />
               <Text style={styles.thanhToan}>Thanh toán</Text>
            </TouchableOpacity>


            <MenuTab />
         </View>
      </ScrollView>
   );
};

const styles = StyleSheet.create({
   scrollView: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   homemain: {
      backgroundColor: Color.chocolate,
      flex: 1,
      height: '100%',
      overflow: 'hidden',
      width: '100%',
   },
   donHangTypo: {
      fontSize: 32,
      textAlign: 'left',
      color: Color.white,
      fontWeight: '500',
      position: 'absolute',
   },
   donHang: {
      top: '8%',
      left: 31,
   },
   donhanglist: {
      left: 28,
      width: '90%',
      height: '100%',
      top: '10%',
   },
   groupspgoiy: {
      top: '42%',
      left: 28,
      width: '100%',
      height: '100%',
      position: 'absolute',
   },
   spGoiY: {
      top: '38%',
      left: 31,
   },
   spGoiYTypo: {
      fontSize: 22,
      textAlign: 'left',
      color: Color.white,
      fontWeight: '300',
      position: 'absolute',
   },
   thanhtoanbtnLayout: {
      height: 44,
      width: 372,
      position: 'absolute',
   },
   thanhtoanbtnLayout: {
      height: 44,
      width: 372,
      position: 'absolute',
   },
   thanhtoanbtnChild: {
      backgroundColor: Color.darkorange_100,
      height: 44,
      width: 372,
      position: 'absolute',
   },
   childPosition: {
      borderRadius: Border.br_3xs,
      top: 0,
      left: 0,
   },
   thanhtoanbtnChild: {
      backgroundColor: Color.darkorange_100,
      height: 44,
      width: 372,
      position: 'absolute',
   },
   thanhToan: {
      textAlign: 'center',
      fontSize: FontSize.size_xl,
      width: 372,
      fontWeight: '700',
      top: 10,
      color: Color.white,
      left: 0,
      position: 'absolute',
   },
   thanhtoanbtn: {
      top: 590,
      left: 23,
   },
   tongthanhToan: {
      width: 248,
      fontSize: FontSize.size_xl,
      top: 121,
      textAlign: 'left',
      color: Color.white,
      fontWeight: '500',
      left: 0,
   },
   thanhtoancontainerChild: {
      top: 109,
      left: -1,
      borderColor: '#d8d8d8',
      width: 367,
      borderStyle: 'solid',
      borderTopWidth: 2,
   },
   thanhtoancontainer: {
      top: 414,
      left: 25,
      width: 366,
      height: 151,
      position: 'absolute',
   },
   tongthanhToanPosition: {
      top: 121,
      position: 'absolute',
   },
   sanPhamTrongGioHangChild: {
      width: 303,
      height: 56,
      position: 'absolute',
   },
   sanPhamTrongGioHang: {
      height: 68,
      left: 1,
      top: 0,
   },
   sanphamLayout: {
      width: 359,
      height: 68,
      position: 'absolute',
   },
   text: {
      left: 268,
      width: 98,
      color: Color.black,
      top: 121,
      textAlign: 'center',
      fontSize: FontSize.size_xl,
      fontWeight: '500',
      position: 'absolute',
   },
   text1: {
      left: 266,
      top: 1,
   },
   free: {
      left: 267,
      top: 35,
   },
   text2: {
      left: 265,
      top: 69,
   },
   textTypo1: {
      textAlign: 'right',
      fontWeight: '300',
      fontSize: FontSize.size_mini,
      width: 98,
      color: Color.black,
      position: 'absolute',
   },
   plusItemLayout: {
      height: 2,
      borderTopWidth: 2,
      position: 'absolute',
   },
   phiShip: {
      top: 34,
      width: 192,
      left: 3,
      fontWeight: '300',
      textAlign: 'left',
      color: Color.white,
      fontSize: FontSize.size_base,
      position: 'absolute',
   },
   giamGia: {
      top: 69,
   },
   tong: {
      top: 0,
   },
   tongTypo: {
      width: 168,
      left: 3,
      fontWeight: '300',
      textAlign: 'left',
      color: Color.white,
      fontSize: FontSize.size_base,
      position: 'absolute',
   },

});

export default DonHangScreen;
