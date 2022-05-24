import React from 'react';
import { SafeAreaView } from 'react-native';
import { AppNavContainer } from './src/navigation';


const App = () => {
  return (

      <SafeAreaView style={{ flex: 1 }}>
        <AppNavContainer />
      </SafeAreaView>
  

  );
};
export default App;
