import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { GoBackBtn, MenuTab } from '../components';
import { Color, FontSize } from '../contants';

const DATA = [
  {
    id: 1,
    name: 'Cánh gà BBQ',
    price: '100000',
    qty: '2',
    orderDate: '10/01/2023',
    status: 'Đã thanh toán',
  },
  {
    id: 2,
    name: 'Cánh vịt BBQ',
    price: '60000',
    qty: '1',
    orderDate: '10/01/2023',
    status: 'Đã giao',
  },
  {
    id: 3,
    name: 'Thịt bò BBQ',
    price: '10000',
    qty: '2',
    orderDate: '11/04/2023',
    status: 'Đang chờ',
  },
  {
    id: 4,
    name: 'Chân gà BBQ',
    price: '250000',
    qty: '2',
    orderDate: '10/01/2023',
    status: 'Đã thanh toán',
  },
  {
    id: 5,
    name: 'Chân gà BBQ',
    price: '250000',
    qty: '2',
    orderDate: '10/01/2023',
    status: 'Đã thanh toán',
  },
  {
    id: 6,
    name: 'Chân gà BBQ',
    price: '250000',
    qty: '2',
    orderDate: '10/01/2023',
    status: 'Đã thanh toán',
  },
  {
    id: 7,
    name: 'Chân gà BBQ',
    price: '250000',
    qty: '2',
    orderDate: '10/01/2023',
    status: 'Đã thanh toán',
  },
  {
    id: 8,
    name: 'Chân gà BBQ',
    price: '250000',
    qty: '2',
    orderDate: '10/01/2023',
    status: 'Đã thanh toán',
  },
];

const OrderHistoryScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <GoBackBtn text="Quay lại" />
      <Text style={styles.title}>Lịch sử mua hàng</Text>
      <FlatList style={styles.list}
        data={DATA}
        renderItem={({ item }) => (
          <OrderItem
            key={item.id}
            name={item.name}
            price={item.price}
            orderDate={item.orderDate}
            status={item.status}
            qty={item.qty}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <MenuTab />
    </SafeAreaView>
  );
};

const OrderItem = (props) => {
  const handlePress = () => {};
  return (
    <TouchableOpacity style={styles.orderContainer} onPress={handlePress}>
      <Text style={styles.name}>{props.name}</Text>

      <View style={styles.flexContainer}>
        <Text style={styles.qty}>x{props.qty}</Text>
        <Text style={styles.price}>{props.price}</Text>
      </View>

      <View style={styles.flexContainer}>
        <Text style={styles.orderDate}>{props.orderDate}</Text>
        <View style={styles.statusView}>
          <Text style={styles.statusText}>{props.status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.DEFAULT_YELLOW,
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    textTransform: 'uppercase',
    fontSize: FontSize.size_xl,
    color: Color.DEFAULT_WHITE,
    marginTop: 60,
    marginBottom: 35,
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  list: {
    width: '88%'
  },
  orderContainer: {
    backgroundColor: Color.DEFAULT_WHITE,
    borderRadius: 8,
    marginBottom: 8,
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
  name: {
    fontSize: FontSize.size_lg,
    fontWeight: 500,
  },
  qty: {
    fontSize: FontSize.size_base,
  },
  price: {
    fontSize: FontSize.size_5xl,
    paddingBottom: 10,
  },
  orderDate: {
    fontSize: FontSize.size_sm,
  },
  statusView: {
    backgroundColor: Color.DEFAULT_GREEN,
    borderRadius: 20,
    minWidth: 110,
    paddingVertical: 2,
  },
  statusText: {
    textAlign: 'center',
    color: Color.DEFAULT_WHITE,
  },
});

export default OrderHistoryScreen;
