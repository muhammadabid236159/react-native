import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import LoginScreen from './LoginScreen'
import HomeScreen from './HomeScreen'
import AboutScreen from './AboutScreen'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

// Drawer navigator — Home aur About ke liye
const DrawerHome = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  )
}

// Main navigator — pehle Login, pass match pe DrawerHome
const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="DrawerHome" component={DrawerHome} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default DrawerNavigation
