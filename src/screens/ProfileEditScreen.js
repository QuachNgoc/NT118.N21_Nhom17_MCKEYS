import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { Color, Images } from '../contants';
import { GoBackBtn } from '../components';

const ProfileEditScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <GoBackBtn navigation={navigation} text="Back" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.DEFAULT_GREEN,
    height: '100%',
  },
});

export default ProfileEditScreen;
