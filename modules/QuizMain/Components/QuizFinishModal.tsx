import React, {useEffect, useMemo} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {
   BackgroundColor,
   CancelColor,
   CheckColor,
   HeaderColor,
   MainFontColor,
} from '../../utils/Styles';
import {QuizFinishModalProps} from '../types/componentType';
import {useSelector} from 'react-redux';

const QuizFinishModal = ({
   quizFinishModalVisible,
   setQuizFinishModalVisible,
   getShuffleQuiz,
   selectAnswer,
}: QuizFinishModalProps) => {
   const closeHandler = () => {
      setQuizFinishModalVisible(false);
   };
   const quizTimerState = useSelector(
      (state: any) => state.slice.quizTimerState,
   );
   const result = useMemo(() => {
      console.log(selectAnswer);
      let correct = 0;
      let inCorrect = 0;
      for (let i = 0; i < getShuffleQuiz.length; i++) {
         if (getShuffleQuiz[i].correct_answer === selectAnswer[i]) {
            correct++;
         } else {
            inCorrect++;
         }
      }
      console.log(correct, inCorrect);
   }, [selectAnswer]);
   return (
      <Modal
         isVisible={quizFinishModalVisible}
         onBackButtonPress={closeHandler}
         testID="closeButton">
         <View style={styles.contentBox}>
            <TouchableOpacity
               style={styles.alignSelfEnd}
               onPress={closeHandler}>
               <Icon type="ionicon" name="ios-close" />
            </TouchableOpacity>
            <Text>소요된시간 {quizTimerState.hour}</Text>
         </View>
      </Modal>
   );
};

export default React.memo(QuizFinishModal);

const styles = StyleSheet.create({
   contentBox: {
      backgroundColor: BackgroundColor,
      height: '30%',
      borderRadius: 10,
      paddingTop: 4,
      paddingBottom: 14,
      paddingHorizontal: 12,
      justifyContent: 'space-between',
   },
   textStyle: {
      color: HeaderColor,
      fontSize: 15,
      marginTop: 15,
   },
   titleText: {
      color: MainFontColor,
      alignSelf: 'center',
      fontSize: 15,
      fontWeight: '700',
   },
   alignSelfEnd: {
      alignSelf: 'flex-end',
   },
   buttonContainer: {
      flexDirection: 'row',
      marginTop: 15,
      height: 30,
   },
   checkButtonBox: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderRadius: 10,
      borderColor: CheckColor,
      marginHorizontal: 5,
   },
   checkButtonText: {
      color: CheckColor,
      fontWeight: '600',
      fontSize: 14,
   },
   cancelButtonBox: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderRadius: 10,
      marginHorizontal: 5,
      borderColor: CancelColor,
   },
   cancelButtonText: {
      color: CancelColor,
      fontWeight: '600',
      fontSize: 14,
   },
});
