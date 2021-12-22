import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import SolvingQuizHeader from '../Components/SolvingQuizHeader';
import {QuizStackScreenProps} from '../types/quizMainStackNavigationTypes';
import QuizStartModal from '../Components/QuizStartModal';

const SolvingQuizScreen = ({navigation, route}: QuizStackScreenProps) => {
   useLayoutEffect(() => {
      navigation.setOptions({
         header: () => (
            <SolvingQuizHeader navigation={navigation} title="문제풀기" />
         ),
      });
   }, []);
   console.log(route.params);
   const {selectedOption} = route.params;
   const [quizStartModalVisible, setQuizStartModalVisible] = useState(true);
   const getQuiz = useSelector((state: any) => state.slice.results);
   console.log(getQuiz.length);
   return (
      <View>
         <Text>퀴즈풀기</Text>
         <QuizStartModal
            quizStartModalVisible={quizStartModalVisible}
            setQuizStartModalVisible={setQuizStartModalVisible}
            amount={selectedOption.amount}
            category={selectedOption.category}
            difficulty={selectedOption.difficulty}
            type={selectedOption.type}
            navigation={navigation}
         />
      </View>
   );
};

export default SolvingQuizScreen;

const styles = StyleSheet.create({});
