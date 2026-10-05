import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import LoginScreen from './src/NavigationScreen/LoginScreen';
import RegisterScreen from './src/NavigationScreen/RegisterScreen';
import HomeScreen from './src/NavigationScreen/HomeScreen';
import AboutScreen from './src/NavigationScreen/AboutScreen';

import { useCounterStore } from './src/store/useCounterStore';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

const Tab = createBottomTabNavigator();

const App = () => {
  const { isDarkMode } = useCounterStore();

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#0F172A' : '#FFFFFF'}
        animated={true}
      />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Login"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: isDarkMode ? '#60A5FA' : '#2563EB',
            tabBarInactiveTintColor: isDarkMode ? '#94A3B8' : '#64748B',
            tabBarStyle: {
              height: 60,
              paddingBottom: 8,
              paddingTop: 8,
              backgroundColor: isDarkMode ? '#1E293B' : '#FFFFFF',
              borderTopColor: isDarkMode ? '#334155' : '#E2E8F0',
            },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Login') {
                iconName = focused ? 'log-in' : 'log-in-outline';
              } else if (route.name === 'Register') {
                iconName = focused ? 'person-add' : 'person-add-outline';
              } else if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'About') {
                iconName = focused ? 'information-circle' : 'information-circle-outline';
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Login" component={LoginScreen} />
          <Tab.Screen name="Register" component={RegisterScreen} />
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="About" component={AboutScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;