import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {
   BackgroundColor,
   CorrectColor,
   InCorrectColor,
   MainFontColor,
   SelectedAnswerColor,
} from '../../utils/Styles';
import {QuizAnswersProps} from '../types/componentType';

const QuizAnswers = ({
   currentQuizInfo,
   selectAnswerHandler,
   selectAnswer,
   currentQuizAmount,
   isWrongAnswerView,
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
               <View style={{flexDirection: 'row'}}>
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
               </View>
               {isWrongAnswerView &&
                  (currentQuizInfo.correct_answer === item ? (
                     <View>
                        <Icon
                           type="feather"
                           name="check-circle"
                           color={CorrectColor}
                        />
                     </View>
                  ) : (
                     <View>
                        <Icon
                           type="feather"
                           name="x-circle"
                           color={InCorrectColor}
                           style={{marginLeft: 12}}
                        />
                     </View>
                  ))}
            </Pressable>
         ))}
      </>
   );
};

export default React.memo(QuizAnswers);

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
      justifyContent: 'space-between',
   },
   answerText: {
      fontSize: 15,
      fontWeight: 'bold',
      maxWidth: '90%',
   },
   answerNumber: {
      fontSize: 16,
      fontWeight: 'bold',
   },
});
