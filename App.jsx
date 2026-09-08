import React from 'react';
import {View} from 'react-native';
import './global.css';

import LoginScreen from './src/components/LoginScreen';
import RegistrationScreen  from './src/components/RegisterationScreen';


const App = () => {
  return (
    <View className="flex-1">
      <RegistrationScreen/>
    </View>
  );
};

export default App;