import React, {useMemo} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import moment from 'moment';
import Modal from 'react-native-modal';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';
import {
   BackgroundColor,
   CorrectColor,
   HeaderColor,
   InCorrectColor,
   MainFontColor,
   ReplayQuizColor,
} from '../../utils/Styles';
import {QuizFinishModalProps} from '../types/componentType';
import {useSelector} from 'react-redux';
import numberPad from '../../utils/utilFunction';
import {PieChart} from 'react-native-chart-kit';
import {insertQuizLog} from '../../utils/AsyncStorageHandlers';
import Toast from 'react-native-simple-toast';

const QuizFinishModal = ({
   quizFinishModalVisible,
   setQuizFinishModalVisible,
   getShuffleQuiz,
   selectAnswer,
   setSelectAnswer,
   setCurrentQuizAmount,
   setStartTime,
   setIsFinish,
   navigation,
   selectedOption,
}: QuizFinishModalProps) => {
   const replayQuizHandler = () => {
      setQuizFinishModalVisible(false);
      setStartTime(moment());
      setIsFinish(false);
      setSelectAnswer(prev => {
         prev = Array(prev.length).fill(undefined);
         return prev;
      });
      setCurrentQuizAmount(1);
   };
   const selectAnotherQuizHandler = () => {
      setQuizFinishModalVisible(false);
      setTimeout(() => {
         navigation.navigate('SelectQuizOption');
      }, 200);
   };
   const getuuid = uuid();
   const insertWongAnswerNote = async () => {
      const insertQuiz = await insertQuizLog(
         selectAnswer,
         getShuffleQuiz,
         getuuid,
         selectedOption,
      );

      Toast.show(
         `${insertQuiz ? '저장되었습니다.' : '이미 저장되었습니다.'}`,
         Toast.SHORT,
      );
   };
   const quizTimerState = useSelector(
      (state: any) => state.slice.quizTimerState,
   );
   const result = useMemo(() => {
      let correct = 0;
      let inCorrect = 0;
      for (let i = 0; i < getShuffleQuiz.length; i++) {
         if (getShuffleQuiz[i].correct_answer === selectAnswer[i]) {
            correct++;
         } else {
            inCorrect++;
         }
      }
      const pieChartData = [
         {
            name: '정답',
            population: correct,
            color: CorrectColor,
            legendFontColor: MainFontColor,
            legendFontSize: 14,
         },
         {
            name: '오답',
            population: inCorrect,
            color: InCorrectColor,
            legendFontColor: MainFontColor,
            legendFontSize: 14,
         },
      ];
      return {pieChartData, correct, inCorrect};
   }, [selectAnswer]);
   return (
      <Modal isVisible={quizFinishModalVisible} testID="closeButton">
         <View style={styles.contentBox}>
            <View style={styles.resultInfoContainer}>
               <View style={styles.resultMentContainer}>
                  <Text style={styles.resultMentText}>수고하셨습니다!</Text>
               </View>
               <View style={styles.flexRow}>
                  <Text style={styles.resultKeyText}>소요된시간 : </Text>
                  <Text style={styles.resultValueText}>
                     {`${numberPad(quizTimerState.hour, 2)}시간 ${numberPad(
                        quizTimerState.minuts,
                        2,
                     )}분 ${numberPad(quizTimerState.seconds, 2)}초`}
                  </Text>
               </View>
               <View style={styles.flexRow}>
                  <Text style={styles.resultKeyText}>총 문항 : </Text>
                  <Text style={styles.resultValueText}>
                     {result.inCorrect + result.correct}
                  </Text>
               </View>
               <View style={styles.quizCorrectInCorrectBox}>
                  <View style={styles.flexRow}>
                     <Text style={styles.resultKeyText}>정답갯수 : </Text>
                     <Text style={styles.resultValueText}>
                        {result.correct}
                     </Text>
                  </View>
                  <Icon
                     type="feather"
                     name="check-circle"
                     color={CorrectColor}
                     style={{marginLeft: 12}}
                  />
               </View>
               <View style={styles.quizCorrectInCorrectBox}>
                  <View style={styles.flexRow}>
                     <Text style={styles.resultKeyText}>오답갯수 :</Text>
                     <Text style={styles.resultValueText}>
                        {result.inCorrect}
                     </Text>
                  </View>
                  <Icon
                     type="feather"
                     name="x-circle"
                     color={InCorrectColor}
                     style={{marginLeft: 12}}
                  />
               </View>

               <PieChart
                  style={{alignSelf: 'center'}}
                  data={result.pieChartData}
                  width={250}
                  height={140}
                  backgroundColor="transparent"
                  accessor="population"
                  paddingLeft="12"
                  chartConfig={{color: () => 'transparent'}}
               />
               <View style={styles.buttonContainer}>
                  <TouchableOpacity
                     activeOpacity={0.6}
                     style={[
                        styles.buttonBox,
                        {backgroundColor: ReplayQuizColor},
                     ]}
                     onPress={replayQuizHandler}>
                     <Text style={styles.buttonText}>
                        다시 풀어보고 싶어요!
                     </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                     activeOpacity={0.6}
                     style={[
                        styles.buttonBox,
                        {backgroundColor: InCorrectColor},
                     ]}
                     onPress={insertWongAnswerNote}>
                     <Text style={styles.buttonText}>
                        오답노트에 저장할래요!
                     </Text>
                     <Text style={styles.buttonText}>
                        (오답노트에선 정답을 확인할 수 있어요!)
                     </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                     activeOpacity={0.6}
                     style={[styles.buttonBox, {backgroundColor: CorrectColor}]}
                     onPress={selectAnotherQuizHandler}>
                     <Text style={styles.buttonText}>
                        다른 퀴즈를 고를래요!
                     </Text>
                  </TouchableOpacity>
               </View>
            </View>
         </View>
      </Modal>
   );
};

export default React.memo(QuizFinishModal);

const styles = StyleSheet.create({
   contentBox: {
      backgroundColor: BackgroundColor,
      height: '70%',
      borderRadius: 14,
      paddingTop: 4,
      paddingBottom: 14,
      paddingHorizontal: 12,
      justifyContent: 'space-between',
   },

   alignSelfEnd: {
      alignSelf: 'flex-end',
   },
   resultInfoContainer: {
      flex: 1,
      justifyContent: 'space-around',
   },
   resultMentContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
   },
   resultMentText: {
      fontSize: 22,
      fontWeight: 'bold',
      color: HeaderColor,
   },
   flexRow: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   quizCorrectInCorrectBox: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 130,
      justifyContent: 'space-between',
   },
   resultKeyText: {
      color: HeaderColor,
      fontSize: 16,
      fontWeight: 'bold',
   },
   resultValueText: {
      color: MainFontColor,
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 6,
   },
   buttonContainer: {
      minHeight: 44,
      alignItems: 'center',
   },
   buttonBox: {
      minHeight: 30,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 5,
      borderRadius: 10,
      paddingVertical: 4,
   },
   buttonText: {
      color: BackgroundColor,
      fontWeight: 'bold',
      fontSize: 14,
   },
});
