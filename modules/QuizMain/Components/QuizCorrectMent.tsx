import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
   BackgroundColor,
   CorrectColor,
   InCorrectColor,
} from '../../utils/Styles';
import {QuizCorrectMentProps} from '../types/componentType';

const QuizCorrectMent = ({
   selectAnswer,
   currentQuizAmount,
   currentQuizInfo,
}: QuizCorrectMentProps) => {
   return (
      <View>
         {selectAnswer[currentQuizAmount - 1] && (
            <View
               style={[
                  {
                     backgroundColor:
                        selectAnswer[currentQuizAmount - 1] ===
                        currentQuizInfo?.correct_answer
                           ? CorrectColor
                           : InCorrectColor,
                  },
                  styles.answerIsCorrectBox,
               ]}>
               <Text style={styles.answerIsCorrectMent}>
                  {selectAnswer[currentQuizAmount - 1] ===
                  currentQuizInfo?.correct_answer
                     ? '정답입니다!'
                     : '틀렸습니다!'}
               </Text>
            </View>
         )}
      </View>
   );
};

export default QuizCorrectMent;

const styles = StyleSheet.create({
   answerIsCorrectBox: {
      height: 30,
      minWidth: 40,
      paddingHorizontal: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 40,
   },
   answerIsCorrectMent: {
      color: BackgroundColor,
      fontWeight: 'bold',
   },
});
