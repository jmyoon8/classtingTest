import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import Main from './modules/QuizMain/Screen/Main';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Main />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
