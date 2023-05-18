import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  LoginScreen,
  ProfileScreen,
  RegisterScreen,
  SplashScreen,
  ProfileEditScreen,
  OnBoardingScreen,
  Home,
  KhuyenMaiScreen,
  DoiDiemScreen,
  DonHangScreen,
  CatetoryScreen,
  OrderDelivery,
  Restaurant
} from '../screens';

const Stack = createStackNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="ProfileEditScreen" component={ProfileEditScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="KhuyenMaiScreen" component={KhuyenMaiScreen} />
        <Stack.Screen name="DoiDiemScreen" component={DoiDiemScreen} />
        <Stack.Screen name="DonHangScreen" component={DonHangScreen} />
        <Stack.Screen name="CatetoryScreen" component={CatetoryScreen} />
        <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
