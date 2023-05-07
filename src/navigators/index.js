import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, RegisterScreen, SplashScreen, OnBoardingScreen, Home, KhuyenMaiScreen, DoiDiemScreen } from '../screens';

const Stack = createStackNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="DoiDiemScreen"
        screenOptions={{ headerShown: false }}
      >

        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="KhuyenMaiScreen" component={KhuyenMaiScreen} />
        <Stack.Screen name="DoiDiemScreen" component={DoiDiemScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
