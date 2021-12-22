import {useIsFocused} from '@react-navigation/native';
import moment from 'moment';
import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
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

const SolvingQuizTimer = ({
   startTime,
   setTimerState,
   timerState,
}: SolvingQuizTimerProps) => {
   const isFocus = useIsFocused();
   const timerHandler = () => {
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
      }, 1000);

      return interval;
   };
   useLayoutEffect(() => {
      if (startTime) {
         const timer = timerHandler();

         return () => {
            console.log('언마운트?');
            clearInterval(timer);
         };
      }
   }, [startTime, isFocus]);
   return (
      <View style={styles.timerContainer}>
         {timerState.seconds ? (
            <Text style={styles.timerText}>
               {numberPad(timerState.hour, 2)} :{' '}
               {numberPad(timerState.minuts, 2)} :{' '}
               {numberPad(timerState.seconds, 2)}
            </Text>
         ) : (
            <Text></Text>
         )}
      </View>
   );
};

export default React.memo(SolvingQuizTimer);
