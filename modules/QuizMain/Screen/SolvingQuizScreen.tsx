import React, {useEffect, useLayoutEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import _ from 'lodash';
import SolvingQuizHeader from '../Components/SolvingQuizHeader';
import {QuizStackScreenProps} from '../types/quizMainStackNavigationTypes';
import QuizStartModal from '../Components/QuizStartModal';
import {
   BackgroundColor,
   CorrectColor,
   EnjoySolvingQuizColor,
   HeaderColor,
   InCorrectColor,
   MainFontColor,
} from '../../utils/Styles';
import SolvingQuizTopInfo from '../Components/SolvingQuizTopInfo';
import SolvingQuizTimer from '../Components/SolvingQuizTimer';
import {MultipleQuizType, QuizeType} from '../types/quizMainTypes';
import {setShuffleQuiz} from '../../utils/Redux/slice';
import MultipleQuizAnswers from '../Components/MultipleQuizAnswers';

const SolvingQuizScreen = ({navigation, route}: QuizStackScreenProps) => {
   const {selectedOption, apiOption} = route.params;

   const dispatcher = useDispatch();

   const [startTime, setStartTime] = useState<any>('');
   const [timerState, setTimerState] = useState({
      hour: '',
      minuts: '',
      seconds: '',
   });
   const [quizStartModalVisible, setQuizStartModalVisible] = useState(true);

   const [currentQuizAmount, setCurrentQuizAmount] = useState(1);
   const getShuffleQuiz: QuizeType[] = useSelector(
      (state: any) => state.slice.shuffleQuiz,
   );
   const currentQuizInfo = getShuffleQuiz[currentQuizAmount - 1];
   const getQuiz: QuizeType[] = useSelector(
      (state: any) => state.slice.results,
   );
   const [selectAnswer, setSelectAnswer] = useState<any[]>(
      Array(getQuiz.length).fill(undefined),
   );

   const topInfoArr = [
      {
         title: '퀴즈풀기',
         subtitle: selectedOption.category,
      },
      {
         title: '난이도',
         subtitle: selectedOption.difficulty,
      },
      {
         title: '퀴즈형식',
         subtitle: selectedOption.type,
      },
      {
         title: '진행사항',
         subtitle: `${selectedOption.amount} / ${currentQuizAmount}`,
      },
   ];
   const selectAnswerHandler = (selectedAnswer: any) => {
      console.log(selectAnswer.length);
      selectAnswer.splice(currentQuizAmount - 1, 1, selectedAnswer);
      setSelectAnswer([...selectAnswer]);
   };

   useEffect(() => {
      const shuffleQuizAnswers = () => {
         if (apiOption.type === 'multiple') {
            let cloneQuiz = _.cloneDeep(getQuiz) as MultipleQuizType[];
            for (let i = 0; i < cloneQuiz.length; i++) {
               cloneQuiz[i].answers = cloneQuiz[i].incorrect_answers;
               cloneQuiz[i].answers.push(cloneQuiz[i].correct_answer);
               cloneQuiz[i].answers = _.shuffle(cloneQuiz[i].answers);
            }
            dispatcher(setShuffleQuiz(cloneQuiz));
         }
      };
      shuffleQuizAnswers();
   }, []);
   useLayoutEffect(() => {
      navigation.setOptions({
         header: () => (
            <SolvingQuizHeader navigation={navigation} title="퀴즈퀴즈!" />
         ),
      });
   }, [navigation]);
   return (
      <ScrollView bounces={false} style={styles.container}>
         <View style={styles.titleBox}>
            <Text style={styles.titleText}>퀴즈를 풀어보아요!</Text>
            <SolvingQuizTimer
               setTimerState={setTimerState}
               startTime={startTime}
               timerState={timerState}
            />
         </View>
         <View style={styles.topInfoContainer}>
            {topInfoArr.map(item => (
               <SolvingQuizTopInfo
                  key={item.title}
                  subTitle={item.subtitle as string}
                  title={item.title}
               />
            ))}
         </View>
         <View style={styles.quizInfoContainer}>
            <View style={styles.questionContainer}>
               <View style={styles.questionTitleBox}>
                  <Text style={styles.questionTitle}>문제</Text>
                  {selectAnswer[currentQuizAmount - 1] && (
                     <View
                        style={[
                           {
                              backgroundColor:
                                 selectAnswer[0] ===
                                 currentQuizInfo.correct_answer
                                    ? CorrectColor
                                    : InCorrectColor,
                           },
                           styles.answerIsCorrectBox,
                        ]}>
                        <Text style={styles.answerIsCorrectMent}>
                           {selectAnswer[currentQuizAmount - 1] ===
                           currentQuizInfo.correct_answer
                              ? '정답입니다!'
                              : '틀렸습니다!'}
                        </Text>
                     </View>
                  )}
               </View>
               <Text style={styles.questionText}>
                  {currentQuizInfo?.question}
               </Text>
            </View>
            <View style={styles.answerContainer}>
               {currentQuizInfo?.type === 'multiple' ? (
                  <MultipleQuizAnswers
                     currentQuizAmount={currentQuizAmount}
                     currentQuizInfo={currentQuizInfo}
                     selectAnswer={selectAnswer}
                     selectAnswerHandler={selectAnswerHandler}
                  />
               ) : (
                  <View></View>
               )}
            </View>
         </View>
         <QuizStartModal
            quizStartModalVisible={quizStartModalVisible}
            setQuizStartModalVisible={setQuizStartModalVisible}
            selectedOption={selectedOption}
            setStartTime={setStartTime}
            navigation={navigation}
         />
      </ScrollView>
   );
};

export default SolvingQuizScreen;

const styles = StyleSheet.create({
   container: {flex: 1, backgroundColor: BackgroundColor},
   titleBox: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      backgroundColor: EnjoySolvingQuizColor,
   },
   titleText: {
      color: BackgroundColor,
      fontWeight: '900',
      fontSize: 18,
   },
   topInfoContainer: {
      flexDirection: 'row',
      height: 60,
   },
   quizInfoContainer: {
      paddingTop: 12,
      paddingHorizontal: 16,
      flex: 1,
   },
   questionContainer: {
      backgroundColor: BackgroundColor,
      minHeight: 60,
      justifyContent: 'space-between',
   },
   questionTitleBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 30,
   },
   questionTitle: {
      color: HeaderColor,
      fontWeight: '500',
      fontSize: 18,
   },
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
   questionText: {
      color: MainFontColor,
      fontSize: 17,
      marginTop: 20,
      fontWeight: '600',
   },
   answerContainer: {
      marginTop: 15,
      minHeight: 140,
      justifyContent: 'space-around',
   },
});
