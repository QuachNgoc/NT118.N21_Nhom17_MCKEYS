import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../contants';

const InputWithIcon = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconContainer}>
        <Icon name={props.icon} size={24} color={Colors.DEFAULT_GREY} />
      </View>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        secureTextEntry={!showPassword}
        value={props.state}
        onChangeText={(text) => props.setState(text)}
      />
      {props.password && (
        <TouchableOpacity style={styles.iconEyeContainer} onPress={() => setShowPassword(!showPassword)}>
          <Icon name={showPassword ? 'eye-slash' : 'eye'} size={24} color={Colors.DEFAULT_GREY} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    borderColor: Colors.DEFAULT_GREY,
    backgroundColor: Colors.DEFAULT_WHITE,
    borderRadius: 30,
    paddingHorizontal: 20,
    marginBottom: 16,
    position: 'relative',
  },
  iconContainer: {
    marginRight: 10,
  },
  input: {
    paddingHorizontal: 10,
    fontSize: 17,
  },
  iconEyeContainer: {
    position: 'absolute',
    right: 20,
  }
});

export default InputWithIcon;
