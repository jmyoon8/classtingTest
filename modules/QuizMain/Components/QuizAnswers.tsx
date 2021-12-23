import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {
   BackgroundColor,
   MainFontColor,
   SelectedAnswerColor,
} from '../../utils/Styles';
import {QuizAnswersProps} from '../types/componentType';

const QuizAnswers = ({
   currentQuizInfo,
   selectAnswerHandler,
   selectAnswer,
   currentQuizAmount,
}: QuizAnswersProps) => {
   return (
      <>
         {currentQuizInfo?.answers.map((item: string, index: number) => (
            <Pressable
               testID={item}
               key={item}
               onPress={() => selectAnswerHandler(item)}
               style={[
                  {
                     backgroundColor:
                        selectAnswer[currentQuizAmount - 1] !== item
                           ? BackgroundColor
                           : SelectedAnswerColor,
                  },
                  styles.answerBox,
               ]}>
               <Text
                  style={[
                     styles.answerNumber,
                     {
                        color:
                           selectAnswer[currentQuizAmount - 1] !== item
                              ? '#000'
                              : BackgroundColor,
                     },
                  ]}>
                  {index + 1}.{'  '}
               </Text>
               <Text
                  style={[
                     styles.answerText,
                     {
                        color:
                           selectAnswer[currentQuizAmount - 1] !== item
                              ? '#000'
                              : BackgroundColor,
                     },
                  ]}>
                  {item}
               </Text>
            </Pressable>
         ))}
      </>
   );
};

export default QuizAnswers;

const styles = StyleSheet.create({
   answerBox: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 15,
      borderRadius: 15,
      marginVertical: 10,
      borderWidth: 2,
      borderColor: MainFontColor,
      minHeight: 35,
      paddingVertical: 5,
      paddingRight: 20,
   },
   answerText: {
      fontSize: 15,
      fontWeight: 'bold',
   },
   answerNumber: {
      fontSize: 16,
      fontWeight: 'bold',
   },
});
