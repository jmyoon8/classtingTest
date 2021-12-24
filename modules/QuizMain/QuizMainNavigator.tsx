import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import MainScreen from './Screen/MainScreen';
import {QuizStackNavigation} from './types/quizMainStackNavigationTypes';
import SolvingQuizScreen from './Screen/SolvingQuizScreen';
import {dimentions} from '../utils/Styles';
import {useSelector} from 'react-redux';

const QuizMainNavigator = () => {
   const quizLoading = useSelector((state: any) => state.slice.apiState);
   return (
      <>
         <QuizStackNavigation.Navigator>
            <QuizStackNavigation.Screen
               name="SelectQuizOption"
               component={MainScreen}
            />
            <QuizStackNavigation.Screen
               name="SolvingQuiz"
               component={SolvingQuizScreen}
            />
         </QuizStackNavigation.Navigator>

         <View
            testID="isLoading"
            style={[
               {
                  display: quizLoading === 'pending' ? 'flex' : 'none',
               },
               styles.loadingDim,
            ]}>
            <ActivityIndicator size={'large'} />
         </View>
      </>
   );
};

export default QuizMainNavigator;

const styles = StyleSheet.create({
   loadingDim: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      height: dimentions.height,
      borderWidth: 1,
      justifyContent: 'center',
      backgroundColor: '#000',
      opacity: 0.5,
   },
});
