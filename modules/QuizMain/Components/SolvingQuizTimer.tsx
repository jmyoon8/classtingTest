import {useIsFocused} from '@react-navigation/native';
import moment from 'moment';
import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setQuizTimerState} from '../../utils/Redux/slice';
import {BackgroundColor} from '../../utils/Styles';
import numberPad from '../../utils/utilFunction';
import {SolvingQuizTimerProps} from '../types/componentType';

const styles = StyleSheet.create({
   timerContainer: {
      position: 'absolute',
      right: 16,
   },
   timerText: {
      color: BackgroundColor,
      fontSize: 14,
      fontWeight: '900',
   },
});

const SolvingQuizTimer = ({startTime, isFinish}: SolvingQuizTimerProps) => {
   const isFocus = useIsFocused();
   const dispatcher = useDispatch();
   const quizTimerSelect = useSelector(
      (state: any) => state.slice.quizTimerState,
   );
   const timerHandler = () => {
      const interval = setInterval(() => {
         const lastSeconds = moment
            .duration(moment().diff(startTime))
            .seconds();
         const lastMinutes = moment
            .duration(moment().diff(startTime))
            .minutes();
         const lastHour = moment.duration(moment().diff(startTime)).hours();
         dispatcher(
            setQuizTimerState({
               hour: lastHour.toString(),
               minuts: lastMinutes.toString(),
               seconds: lastSeconds.toString(),
            }),
         );
      }, 1000);

      return interval;
   };
   useLayoutEffect(() => {
      if (startTime) {
         const timer = timerHandler();
         if (isFinish) {
            clearInterval(timer);
         }
         return () => {
            clearInterval(timer);
         };
      }
   }, [startTime, isFocus, isFinish]);

   return (
      <View style={styles.timerContainer}>
         {quizTimerSelect.seconds ? (
            <Text style={styles.timerText}>
               {numberPad(quizTimerSelect.hour, 2)} :{' '}
               {numberPad(quizTimerSelect.minuts, 2)} :{' '}
               {numberPad(quizTimerSelect.seconds, 2)}
            </Text>
         ) : undefined}
      </View>
   );
};

export default React.memo(SolvingQuizTimer);
