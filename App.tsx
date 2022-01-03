import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import QuizMainNavigator from './modules/QuizMain/QuizMainNavigator';
import configureStroe from './modules/utils/Redux/configureStore';
import {StyleSheet} from 'react-native';

const App = () => {
   useEffect(() => {
      // 스토리지 init
      const setWrongNote = async () => {
         const getItem = await AsyncStorage.getItem('wrongAnswerNote');
         if (!getItem) {
            await AsyncStorage.setItem('wrongAnswerNote', JSON.stringify([]));
         }
      };
      setWrongNote();
   }, []);
   return (
      <SafeAreaProvider>
         <SafeAreaView style={styles.flex1}>
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

const styles = StyleSheet.create({
   flex1: {
      flex: 1,
   },
});
