import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Images } from '../contants';

const PaymentSuccessScreen = ({navigation}) => {
   return (
      <View style={styles.container}>
         <Image
            source={Images.check_mark} // Replace with your own success icon
            style={styles.icon}
         />
         <Text style={styles.title}>Thanh toán thành công!</Text>
         <Text style={styles.subtitle}>Đơn hàng sẽ được giao.</Text>
         <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>OrderID:</Text>
            <Text style={styles.infoText}>#123456</Text>
         </View>
         <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Tổng số tiền:</Text>
            <Text style={styles.infoText}>75.000đ</Text>
         </View>
         <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
         >
            <Text style={styles.buttonText}>Về trang chủ</Text>
         </TouchableOpacity>
      </View>
   );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    color: '#666',
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
    color: '#555',
  },
  infoText: {
    fontSize: 16,
    color: '#777',
  },
  button: {
    backgroundColor: '#4287f5',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default PaymentSuccessScreen;
