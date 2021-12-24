import React, {useLayoutEffect, useMemo, useState} from 'react';
import {ScrollView, StyleSheet, Text, View, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import _ from 'lodash';
import SolvingQuizHeader from '../Components/SolvingQuizHeader';
import {QuizStackScreenProps} from '../types/quizMainStackNavigationTypes';
import QuizStartModal from '../Components/QuizStartModal';
import {
   BackgroundColor,
   EnjoySolvingQuizColor,
   HeaderColor,
   MainFontColor,
} from '../../utils/Styles';
import SolvingQuizTopInfo from '../Components/SolvingQuizTopInfo';
import SolvingQuizTimer from '../Components/SolvingQuizTimer';
import {QuizType} from '../types/quizMainTypes';
import QuizAnswers from '../Components/QuizAnswers';
import QuizCorrectMent from '../Components/QuizCorrectMent';
import QuizeExplorer from '../Components/QuizeExplorer';
import QuizFinishModal from '../Components/QuizFinishModal';
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';

const SolvingQuizScreen = ({navigation, route}: QuizStackScreenProps) => {
   const {selectedOption, isWrongAnswerNotes, wrongAnswerNoteInfo} =
      route.params;
   const [startTime, setStartTime] = useState<any>('');

   const [isReplay, setIsReplay] = useState(false);
   const quizId = useMemo(() => {
      const id = uuid();
      return id;
   }, [isReplay]);

   const [quizStartModalVisible, setQuizStartModalVisible] = useState(
      isWrongAnswerNotes ? false : true,
   );
   const [quizFinishModalVisible, setQuizFinishModalVisible] = useState(false);

   const [currentQuizAmount, setCurrentQuizAmount] = useState(1);

   const getShuffleQuiz: QuizType[] = isWrongAnswerNotes
      ? wrongAnswerNoteInfo?.getShuffleQuiz
      : useSelector((state: any) => state.slice.shuffleQuiz);

   const [selectAnswer, setSelectAnswer] = useState<string[]>(
      isWrongAnswerNotes
         ? (wrongAnswerNoteInfo?.selectAnswer as string[])
         : Array(getShuffleQuiz.length).fill(undefined),
   );
   const currentQuizInfo = getShuffleQuiz[currentQuizAmount - 1];

   const [isFinish, setIsFinish] = useState(false);
   const [isWrongAnswerView, setIsWrongAnswerView] = useState(
      isWrongAnswerNotes ? true : false,
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
      if (!selectAnswer[currentQuizAmount - 1]) {
         selectAnswer.splice(currentQuizAmount - 1, 1, selectedAnswer);
         setSelectAnswer([...selectAnswer]);
      }
   };
   const quizExplorerHandler = (whereGoing: 'next' | 'prev') => {
      if (whereGoing === 'next') {
         if (selectedOption.amount !== currentQuizAmount) {
            setCurrentQuizAmount(currentQuizAmount + 1);
         } else {
            Alert.alert(
               '마지막 퀴즈입니다',
               '결과를 보시겠습니까?',
               [
                  {
                     text: '네! 볼래요!',
                     style: 'default',
                     onPress: () => {
                        setQuizFinishModalVisible(true);
                        setIsFinish(true);
                     },
                  },
                  {
                     text: '좀더 검토할께요!',
                     style: 'destructive',
                  },
               ],
               {cancelable: true},
            );
         }
      } else {
         setCurrentQuizAmount(currentQuizAmount - 1);
      }
   };

   useLayoutEffect(() => {
      navigation.setOptions({
         header: () => (
            <SolvingQuizHeader navigation={navigation} title="퀴즈퀴즈!" />
         ),
      });
   }, [navigation]);

   return (
      <>
         <ScrollView bounces={false} style={styles.container}>
            <View style={styles.titleBox}>
               <Text style={styles.titleText}>퀴즈를 풀어보아요!</Text>
               <SolvingQuizTimer startTime={startTime} isFinish={isFinish} />
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
                     <Text style={styles.questionTitle}>
                        {currentQuizAmount}.{' '}
                        {isWrongAnswerView ? '오답노트' : '문제'}
                     </Text>
                     <QuizCorrectMent
                        currentQuizAmount={currentQuizAmount}
                        currentQuizInfo={currentQuizInfo}
                        selectAnswer={selectAnswer}
                     />
                  </View>
                  <Text style={styles.questionText}>
                     {currentQuizInfo?.question}
                  </Text>
               </View>
               <View style={styles.answerContainer}>
                  <QuizAnswers
                     currentQuizAmount={currentQuizAmount}
                     currentQuizInfo={currentQuizInfo}
                     selectAnswer={selectAnswer}
                     selectAnswerHandler={selectAnswerHandler}
                     isWrongAnswerView={isWrongAnswerView}
                  />
               </View>
            </View>

            <QuizStartModal
               quizStartModalVisible={quizStartModalVisible}
               setQuizStartModalVisible={setQuizStartModalVisible}
               selectedOption={selectedOption}
               setStartTime={setStartTime}
               navigation={navigation}
            />
            {quizFinishModalVisible && (
               <QuizFinishModal
                  selectAnswer={selectAnswer}
                  getShuffleQuiz={getShuffleQuiz}
                  quizFinishModalVisible={quizFinishModalVisible}
                  setQuizFinishModalVisible={setQuizFinishModalVisible}
                  setSelectAnswer={setSelectAnswer}
                  setCurrentQuizAmount={setCurrentQuizAmount}
                  setStartTime={setStartTime}
                  setIsFinish={setIsFinish}
                  navigation={navigation}
                  selectedOption={selectedOption}
                  quizId={quizId}
                  setIsReplay={setIsReplay}
                  setIsWrongAnswerView={setIsWrongAnswerView}
                  isWrongAnswerView={isWrongAnswerView}
                  startTime={startTime}
               />
            )}
         </ScrollView>
         <QuizeExplorer
            currentQuizAmount={currentQuizAmount}
            quizExplorerHandler={quizExplorerHandler}
            selectAnswer={selectAnswer}
         />
      </>
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
