import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MainScreen from './Screen/MainScreen';
import GetQuizScreen from './Screen/GetQuizScreen';
import {QuizStackNavigation} from './types/quizMainStackNavigation';

const QuizMainNavigator = () => {
   return (
      <QuizStackNavigation.Navigator>
         <QuizStackNavigation.Screen
            name="SelectQuizOption"
            component={MainScreen}
         />
         <QuizStackNavigation.Screen
            name="GetQuizScreen"
            component={GetQuizScreen}
         />
      </QuizStackNavigation.Navigator>
   );
};

export default QuizMainNavigator;

const styles = StyleSheet.create({});
