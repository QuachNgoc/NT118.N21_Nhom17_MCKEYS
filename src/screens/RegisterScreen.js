import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Display } from '../utils';
import { Colors, Images } from '../contants';
import { InputWithIcon } from '../components';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    // Handle login logic here
    console.log(
      `Register with username: ${username} and password: ${password}`
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goToBackBtn} onPress={() => navigation.navigate("LoginScreen")}>
        <Icon style={styles.goToBackBtnText} name="chevron-left" />
        <Text style={styles.goToBackBtnText} >Back to Login</Text>
      </TouchableOpacity>

      <Image source={Images.PLATE} resizeMode="contain" style={styles.image} />

      <Text style={styles.title}>Register</Text>

      <InputWithIcon
        icon="envelope"
        placeholder="Email"
        state={email}
        setState={setEmail}
      />
      <InputWithIcon
        icon="user"
        placeholder="Username"
        state={username}
        setState={setUsername}
      />
      <InputWithIcon
        icon="lock"
        placeholder="Password"
        password
        state={password}
        setState={setPassword}
      />
      <InputWithIcon
        icon="lock"
        placeholder="Confirm Password"
        password
        state={passwordConfirm}
        setState={setPasswordConfirm}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.DEFAULT_GREEN,
    position: 'relative'
  },
  image: {
    height: Display.setHeight(16),
    width: Display.setWidth(32),
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 32,
    textTransform: 'uppercase',
    color: Colors.DEFAULT_WHITE,
  },
  button: {
    backgroundColor: Colors.DEFAULT_YELLOW,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 14,
    marginTop: 10,
    width: '80%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 19,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  goToBackBtn: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 30,
    position: 'absolute',
    top: 70
  },
  goToBackBtnText: {
    fontSize: 20,
    color: Colors.DEFAULT_WHITE
  }
});

export default RegisterScreen;
