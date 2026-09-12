import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ContactListScreen from './Screens/ContactListScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <ContactListScreen />
    </SafeAreaProvider>
  );
};

export default App;