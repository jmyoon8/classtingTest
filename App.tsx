import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
   SafeAreaProvider,
   SafeAreaView,
} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import QuizMainNavigator from './modules/QuizMain/QuizMainNavigator';
import configureStroe from './modules/utils/Redux/configureStore';

const App = () => {
   return (
      <SafeAreaProvider>
         <SafeAreaView style={{flex: 1}}>
            <Provider store={configureStroe}>
               <NavigationContainer>
                  <QuizMainNavigator />
               </NavigationContainer>
            </Provider>
         </SafeAreaView>
      </SafeAreaProvider>
   );
};

export default App;
