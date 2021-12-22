import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MainScreen from './Screen/MainScreen';

import {QuizStackNavigation} from './types/quizMainStackNavigationTypes';
import SolvingQuizScreen from './Screen/SolvingQuizScreen';

const QuizMainNavigator = () => {
   return (
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
   );
};

export default QuizMainNavigator;

const styles = StyleSheet.create({});
