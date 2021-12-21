import React, {useLayoutEffect, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {QuizStackScreenProps} from '../types/quizMainStackNavigation';

const QuizScreen = ({navigation, route}: QuizStackScreenProps) => {
   useLayoutEffect(() => {
      navigation.setOptions({
         header: () => <View></View>,
      });
      console.log(route.params);
   }, []);

   return (
      <View>
         <Text>asdads</Text>
      </View>
   );
};

export default QuizScreen;

const styles = StyleSheet.create({});
