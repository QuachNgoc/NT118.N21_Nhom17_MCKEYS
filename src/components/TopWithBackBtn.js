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

const TopWithBackBtn = ({ title, goBack, hasTitle, hasProfile }) => {
   const navigation = useNavigation();

   return (
      <View style={styles.container}>
         {goBack && (
            <TouchableOpacity
               style={styles.btn}
               onPress={() => navigation.goBack()}
            >
               <Icon
                  style={styles.btnIcon}
                  name="chevron-left"
               />
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
      backgroundColor: Color.DEFAULT_YELLOW
   },
   btn: {
      flexDirection: 'row',
      alignItems: 'center',
      position: 'absolute',
      bottom: 8,
      left: 17,
      zIndex:10,
      fontSize: 19,
   },
   btnIcon: {
      fontSize: 33,
      padding: 4,
      color: Color.DEFAULT_WHITE
   },
   title: {
      flex: 1,
      fontSize: 24,
      textAlign: 'center',
      paddingTop: 15,
      fontWeight: '400',
      color: Color.DEFAULT_WHITE
   },
   profile: {
      height: 38,
      width: 38,
      position: 'absolute',
      right: 31,
      bottom: 12,
      borderColor: Color.LIGHT_GREY,
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
