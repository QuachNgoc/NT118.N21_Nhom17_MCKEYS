import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { Color, Images } from '../contants';
import { Display } from '../utils';
import { InputWithIcon } from '../components';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log(
      `Logging in with username: ${username} and password: ${password}`
    );
  };

  const handleGoogleLogin = () => {

  };

  return (
    <View style={styles.container}>
      <Image source={Images.PLATE} resizeMode="contain" style={styles.image} />

      <Text style={styles.title}>Login</Text>

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

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.register}
        onPress={() => navigation.push('RegisterScreen')}
      >
        <Text style={styles.registerText}>
          Haven't had account yet? Register now
        </Text>
      </TouchableOpacity>

      <Text style={styles.divider}>OR</Text>

      <TouchableOpacity style={styles.googleBtn} onPress={handleGoogleLogin}>
        <Image source={Images.GOOGLE_ICON} resizeMode="contain" style={styles.imageGoogle}/>
        <Text style={styles.googleBtnText}>Login with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.DEFAULT_GREEN,
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
    color: Color.DEFAULT_WHITE,
  },
  button: {
    backgroundColor: Color.DEFAULT_YELLOW,
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
  divider: {
    color: Color.DEFAULT_WHITE,
    fontWeight: 500,
    fontSize: 20,
    paddingVertical: 20,
    textTransform: 'uppercase',
  },
  register: {
    paddingHorizontal: 10,
    marginTop: 30,
  },
  registerText: {
    color: Color.LIGHT_GREEN,
    fontSize: 18,
    textDecorationLine: 'underline',
  },
  googleBtn: {
    flexDirection: 'row',
    width: '80%',
    backgroundColor: Color.DEFAULT_WHITE,
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  googleBtnText: {
    color: Color.DEFAULT_BLACK,
    fontSize: 19,
     marginLeft: 12
  },
  imageGoogle: {
    height: Display.setHeight(6),
    width: Display.setWidth(6),
  }
});

export default LoginScreen;
