import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Color } from '../contants';

const GoBackBtn = ({navigation, text, navigateTo }) => {

  const handlePress = () => {
    if (navigateTo) {
      navigation.navigate(navigateTo);
    } else {
      navigation.goBack();
    }
  }

  return (
    <TouchableOpacity
      style={styles.goToBackBtn}
      onPress={handlePress}
    >
      <Icon style={styles.goToBackBtnText} name="chevron-left" />
      {text && <Text style={styles.goToBackBtnText}>{text}</Text>}
    </TouchableOpacity>
  );
};

const styles = {
  goToBackBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 30,
    position: 'absolute',
    top: 60,
    left: '6%'
  },
  goToBackBtnText: {
    fontSize: 20,
    color: Color.DEFAULT_WHITE
  }
}

export default GoBackBtn;
