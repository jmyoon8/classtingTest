import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import QuizMainNavigator from './modules/QuizMain/QuizMainNavigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <QuizMainNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
