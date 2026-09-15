import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import UseEffectHook from './src/components/Useeffecthook';
import Useeffecthookpart2 from './src/components/Useeffecthookpart2';


const App = () => {
  return (
    <SafeAreaProvider>
      <Useeffecthookpart2/>
    </SafeAreaProvider>
  );
};

export default App;