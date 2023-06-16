import React from 'react';
import {
   View,
   Text,
   SafeAreaView,
   StyleSheet,
   TouchableOpacity,
   FlatList,
   Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

// import custom file
import { Color, Images } from '../contants';

const TopWithBackBtn = ({ title, goBack, hasTitle, btnTitle, hasProfile }) => {
   const navigation = useNavigation();

   return (
      <View style={styles.container}>
         {goBack && (
            <TouchableOpacity
               style={styles.btn}
               onPress={() => navigation.goBack()}
            >
               <Icon
                  style={styles.btnText}
                  name="chevron-left"
               />
               {btnTitle && <Text style={styles.btnText}>{btnTitle}</Text>}
            </TouchableOpacity>
         )}

         {hasTitle && <Text style={styles.title}>{title}</Text>}

         {hasProfile && (
            <TouchableOpacity style={styles.profile}>
               <Image
                  style={styles.profileImg}
                  source={Images.CIRCLE}
                  resizeMode="cover"
               />
            </TouchableOpacity>
         )}
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      paddingTop: 40,
      paddingBottom: 10,
      width: '100%',
      minHeight: 100,
   },
   btn: {
      flexDirection: 'row',
      alignItems: 'center',
      position: 'absolute',
      bottom: 12,
      left: 17,
      zIndex:10
   },
   btnText: {
      fontSize: 19,
   },
   title: {
      flex: 1,
      fontSize: 26,
      textAlign: 'center',
      paddingTop: 15,
      fontWeight: 'bold',
   },
   profile: {
      height: 38,
      width: 38,
      position: 'absolute',
      right: 31,
      bottom: 12,
      borderColor: 'black',
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 19
   },
   profileImg: {
      height: '100%',
      width: '100%',
      borderRadius: 18
   }
});

export default TopWithBackBtn;
