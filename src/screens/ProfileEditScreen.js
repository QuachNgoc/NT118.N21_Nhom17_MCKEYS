import React, {useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { Color, FontSize, Images } from '../contants';
import { GoBackBtn, InputWithIcon, MenuTab } from '../components';
import Icon from 'react-native-vector-icons/AntDesign';
import { Text } from 'react-native';

const ProfileEditScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleUpdate = () => {

  }

  return (
    <SafeAreaView style={styles.container}>
      <GoBackBtn text="Quay lại" />

      <Text style={styles.title}>Hồ sơ</Text>

      <TouchableOpacity style={styles.avatarContainer}>
        <Image style={styles.avatarImg} source={Images.AVATAR} resizeMode='contain' />
        <Icon style={styles.avatarIcon} name="pluscircle" />
      </TouchableOpacity>

      <InputWithIcon
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Họ và tên"
        icon="user"
      />
      <InputWithIcon
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        icon="envelope"
      />
      <InputWithIcon
        style={styles.input}
        onChangeText={setNumber}
        value={number}
        placeholder="Số điện thoại"
        keyboardType="numeric"
        icon="phone"
      />
      <InputWithIcon
        style={styles.input}
        onChangeText={setAddress}
        value={address}
        placeholder="Địa chỉ giao hàng"
        icon="map-marker"
      />

      <TouchableOpacity onPress={handleUpdate} style={styles.btn}>
        <Text style={styles.btnText}>CẬP NHẬT THÔNG TIN</Text>
      </TouchableOpacity>

      <MenuTab />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.DEFAULT_YELLOW,
    height: '100%',
    flexDirection:'column',
    alignItems: 'center'
  },
  title: {
    textTransform: 'uppercase',
    fontSize: FontSize.size_xl,
    color: Color.DEFAULT_WHITE,
    marginTop: 60,
    marginBottom: 35
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: Color.whitesmoke_200,
    borderWidth: 2,
    borderStyle: 'solid',
    position: 'relative',
    marginBottom: 60
  },
  avatarImg: {
    width: '100%',
    height: '100%',
    borderRadius: 50
  },
  avatarIcon: {
    color: Color.whitesmoke_200,
    fontSize: FontSize.size_xl,
    backgroundColor: Color.black,
    borderRadius: 10,
    position: 'absolute',
    bottom: 3,
    right: 3
  },
  btn: {
    backgroundColor: Color.DEFAULT_GREEN,
    paddingHorizontal: 40,
    paddingVertical: 15,
    marginTop: 60,
    borderRadius: 10
  },
  btnText: {
    color: Color.white,
    fontSize: FontSize.size_base
  }
});

export default ProfileEditScreen;
