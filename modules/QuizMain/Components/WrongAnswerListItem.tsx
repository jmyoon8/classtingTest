import moment from 'moment';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {BottomDividerColor, SubFontColor} from '../../utils/Styles';
import numberPad from '../../utils/utilFunction';
import {WrongAnswerListItemProps} from '../types/componentType';

const WrongAnswerListItem = ({
   wrongAnswerNoteItem,
   goToWrongAnswerNoteHandler,
   deleteWrongAnswerNoteHandler,
}: WrongAnswerListItemProps) => {
   return (
      <TouchableOpacity
         key={wrongAnswerNoteItem.quizId}
         activeOpacity={0.6}
         style={styles.wrongAnswerNoteContainer}
         onPress={() => goToWrongAnswerNoteHandler(wrongAnswerNoteItem)}>
         <View style={styles.wrongAnswerNoteHeaderBox}>
            <Text style={styles.accordionContentBoxSubFont}>
               시작시간 시간 :{' '}
               {moment(wrongAnswerNoteItem.startTime).format(
                  'YYYY-MM-DD A hh:mm ',
               )}
            </Text>
            <TouchableOpacity
               onPress={() =>
                  deleteWrongAnswerNoteHandler(wrongAnswerNoteItem.quizId)
               }
               activeOpacity={0.4}>
               <Icon type="ionicon" name="ios-close" />
            </TouchableOpacity>
         </View>
         <Text style={styles.accordionContentBoxSubFont}>
            걸린시간 시간 :{numberPad(wrongAnswerNoteItem.getQuizTimer.hour, 2)}
            시간 {numberPad(wrongAnswerNoteItem.getQuizTimer.minuts, 2)}분{' '}
            {numberPad(wrongAnswerNoteItem.getQuizTimer.seconds, 2)}초{' '}
         </Text>
         <Text style={styles.accordionContentBoxSubFont}>
            저장 시간 : {wrongAnswerNoteItem.solvedDate}
         </Text>
         <Text style={styles.accordionContentBoxSubFont}>
            퀴즈 형식 : {wrongAnswerNoteItem.selectedOption.category}
         </Text>
         <Text style={styles.accordionContentBoxSubFont}>
            퀴즈 유형 : {wrongAnswerNoteItem.selectedOption.type}
         </Text>
         <Text style={styles.accordionContentBoxSubFont}>
            난이도 : {wrongAnswerNoteItem.selectedOption.difficulty}
         </Text>
         <Text style={styles.accordionContentBoxSubFont}>
            총 문항 :{' '}
            {wrongAnswerNoteItem?.result?.correct +
               wrongAnswerNoteItem?.result?.inCorrect}
         </Text>
         <Text style={styles.accordionContentBoxSubFont}>
            정답 : {wrongAnswerNoteItem?.result?.correct}
         </Text>
         <Text style={styles.accordionContentBoxSubFont}>
            오답 : {wrongAnswerNoteItem?.result?.inCorrect}
         </Text>
      </TouchableOpacity>
   );
};

export default WrongAnswerListItem;

const styles = StyleSheet.create({
   wrongAnswerNoteContainer: {
      minHeight: 43.3,
      justifyContent: 'space-between',
      paddingHorizontal: 14,
      borderBottomColor: BottomDividerColor,
      borderBottomWidth: 0.3,
      paddingVertical: 8,
   },
   wrongAnswerNoteHeaderBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   accordionContentBoxSubFont: {
      color: SubFontColor,
      fontWeight: '700',
      marginVertical: 4,
   },
});
