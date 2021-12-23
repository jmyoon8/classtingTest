import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import configureStroe from '../../utils/Redux/configureStore';
import {
   BackgroundColor,
   MainFontColor,
   SelectedAnswerColor,
} from '../../utils/Styles';
import {MultipleQuizAnswersProps} from '../types/componentType';

const MultipleQuizAnswers = ({
   currentQuizInfo,
   selectAnswerHandler,
   selectAnswer,
   currentQuizAmount,
}: MultipleQuizAnswersProps) => {
   return (
      <>
         {currentQuizInfo.answers.map((item: string, index: number) => (
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

export default MultipleQuizAnswers;

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
      height: 35,
   },
   answerText: {
      fontSize: 15,
      fontWeight: 'bold',
   },
   answerNumber: {
      fontSize: 15,
      fontWeight: 'bold',
   },
});
