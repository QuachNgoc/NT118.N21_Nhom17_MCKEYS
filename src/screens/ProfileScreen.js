import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Color, Images } from '../contants';
import GoBackBtn from '../components/GoBackBtn';

const DATA = [
  {
    title: 'Lịch sử mua hàng',
    icon: 'dashboard',
  },
  {
    title: 'Phương thức thanh toán',
    icon: 'creditcard',
  },
  {
    title: 'Món ăn yêu thích',
    icon: 'hearto',
  },
  {
    title: 'Về chúng tôi',
    icon: 'team',
  },
];

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>

        <GoBackBtn 
          navigation={navigation}
          text='Back'
          style={styles.goBackBtn}
        />

        <Text style={styles.title}>Profile</Text>

        <View style={styles.userContainer}>
          <TouchableOpacity
            style={styles.userAvatar}
            onPress={() => navigation.push('ProfileEditScreen')}
          >
            <Image
              source={Images.AVATAR}
              resizeMode="contain"
              style={styles.userImage}
            />
          </TouchableOpacity>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Nguyễn Văn A</Text>
            <TouchableOpacity
              style={styles.userEdit}
              onPress={() => navigation.push('ProfileEditScreen')}
            >
              <Text style={styles.userEditText}>Chỉnh sửa</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={styles.infoItemNum}>99+</Text>
            <Text style={styles.infoItemText}>Đơn đặt hàng</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoItemNum}>99+</Text>
            <Text style={styles.infoItemText}>Đang giao</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoItemNum}>99+</Text>
            <Text style={styles.infoItemText}>Đã nhận</Text>
          </View>
        </View>
      </View>

      <FlatList
        style={styles.list}
        data={DATA}
        renderItem={({ item }) => (
          <ProfileItem title={item.title} icon={item.icon} />
        )}
      />

      <TouchableOpacity style={styles.logout}>
        <Icon style={styles.logoutIcon} name="logout" />
        <Text style={styles.logoutText}>Đăng xuất</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const ProfileItem = (props) => {
  return (
    <TouchableOpacity style={styles.profileItemContainer}>
      <Icon style={styles.profileItemIcon} name={props.icon} />
      <Text style={styles.profileItemText}>{props.title}</Text>
      <Icon style={styles.profileItemRight} name="right" />
      <View style={styles.line}></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Color.LIGHT_GREY,
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 100,
    backgroundColor: Color.orangered_200,
    width: '100%',
    position: 'relative',
    marginBottom: 90,
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 24,
    color: Color.DEFAULT_WHITE,
    marginBottom: 40,
  },
  userContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: Color.SECONDARY_WHITE,
    width: '88%',
    borderRadius: 10,
  },
  userAvatar: {
    marginRight: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Color.DARK_FIVE,
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  userImage: {
    width: '100%',
    height: '100%',
    borderRadius: 35,
  },
  userInfo: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  userName: {
    fontSize: 26,
    marginBottom: 3,
  },
  userEdit: {
    borderColor: Color.DARK_FIVE,
    borderRadius: 8,
    borderWidth: 1,
    width: '60%',
    paddingVertical: 2,
  },
  userEditText: {
    textAlign: 'center',
    fontSize: 17,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Color.DEFAULT_WHITE,
    width: '88%',
    position: 'absolute',
    top: 280,
    paddingVertical: 26,
    borderRadius: 9,
    elevation: 1,
  },
  infoItem: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '33%',
  },
  infoItemNum: {
    fontSize: 24,
    fontWeight: 600,
  },
  infoItemText: {
    color: Color.DARK_FOUR,
    fontSize: 16,
    marginTop: 4,
  },
  list: {
    width: '80%',
  },
  profileItemContainer: {
    flexDirection: 'row',
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 9,
    marginVertical: 6,
  },
  profileItemIcon: {
    fontSize: 24,
    marginHorizontal: 10,
    fontWeight: 500,
    color: Color.DARK_FOUR,
  },
  profileItemText: {
    fontSize: 20,
    fontWeight: 500,
    color: Color.DARK_FOUR,
  },
  profileItemRight: {
    fontSize: 18,
    position: 'absolute',
    right: 10,
    color: Color.DARK_FIVE,
  },
  line: {
    height: 1,
    backgroundColor: Color.DARK_FIVE,
    width: '92%',
    position: 'absolute',
    bottom: 0,
    right: '4%',
  },
  logout: {
    flexDirection: 'row',
    width: '80%',
    backgroundColor: Color.DEFAULT_RED,
    alignItems: 'center',
    borderRadius: 9,
    padding: 12,
    justifyContent: 'center',
    marginBottom: 30,
  },
  logoutIcon: {
    color: Color.DEFAULT_WHITE,
    fontSize: 22,
    marginRight: 8,
  },
  logoutText: {
    color: Color.DEFAULT_WHITE,
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
