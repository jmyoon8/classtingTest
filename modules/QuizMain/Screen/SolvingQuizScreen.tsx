import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import SolvingQuizHeader from '../Components/SolvingQuizHeader';
import {QuizStackScreenProps} from '../types/quizMainStackNavigationTypes';
import QuizStartModal from '../Components/QuizStartModal';
import moment from 'moment';
import {
   BackgroundColor,
   EnjoySolvingQuizColor,
   MainFontColor,
} from '../../utils/Styles';
import SolvingQuizTopInfo from '../Components/SolvingQuizTopInfo';
import {useIsFocused} from '@react-navigation/native';

const SolvingQuizScreen = ({navigation, route}: QuizStackScreenProps) => {
   useLayoutEffect(() => {
      navigation.setOptions({
         header: () => (
            <SolvingQuizHeader navigation={navigation} title="문제풀기" />
         ),
      });
   }, [navigation]);

   const {selectedOption, apiOption} = route.params;
   const [startTime, setStartTime] = useState<any>('');
   const [timerState, setTimerState] = useState({
      hour: '',
      minuts: '',
      seconds: '',
   });
   const [quizStartModalVisible, setQuizStartModalVisible] = useState(true);
   const [currentQuizAmount, setCurrentQuizAmount] = useState(1);
   const getQuiz = useSelector((state: any) => state.slice.results);

   console.log(getQuiz[currentQuizAmount - 1]);
   const isFocus = useIsFocused();
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
         title: '총문항 / 현재 문항',
         subtitle: `${selectedOption.amount} / ${currentQuizAmount}`,
      },
   ];

   const timerHandler = useCallback(() => {
      const interval = setInterval(() => {
         const lastSeconds = moment
            .duration(moment().diff(startTime))
            .seconds();
         const lastMinutes = moment
            .duration(moment().diff(startTime))
            .minutes();
         const lastHour = moment.duration(moment().diff(startTime)).hours();
         setTimerState({
            hour: lastHour.toString(),
            minuts: lastMinutes.toString(),
            seconds: lastSeconds.toString(),
         });
         console.log(lastHour, lastMinutes, lastSeconds);
      }, 1000);

      return interval;
   }, [startTime]);
   useLayoutEffect(() => {
      if (startTime) {
         timerHandler();
      }
      if (!isFocus) {
         console.log('꺼짐?');
         clearInterval(timerHandler());
      }
      return () => {
         clearInterval(timerHandler());
      };
   }, [startTime, isFocus]);

   return (
      <View style={{flex: 1, backgroundColor: BackgroundColor}}>
         <View
            style={{
               flexDirection: 'row',
               justifyContent: 'center',
               alignItems: 'center',
               height: 30,
               backgroundColor: EnjoySolvingQuizColor,
            }}>
            <Text
               style={{
                  color: BackgroundColor,
                  fontWeight: 'bold',
                  fontSize: 15,
               }}>
               즐거운 퀴즈풀이!
            </Text>
         </View>
         <View style={{flexDirection: 'row'}}>
            {topInfoArr.map(item => (
               <SolvingQuizTopInfo
                  key={item.title}
                  subTitle={item.subtitle as string}
                  title={item.title}
               />
            ))}
         </View>
         <QuizStartModal
            quizStartModalVisible={quizStartModalVisible}
            setQuizStartModalVisible={setQuizStartModalVisible}
            selectedOption={selectedOption}
            setStartTime={setStartTime}
            navigation={navigation}
         />
      </View>
   );
};

export default SolvingQuizScreen;

const styles = StyleSheet.create({});
