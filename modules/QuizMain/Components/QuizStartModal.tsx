import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import moment from 'moment';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {
   BackgroundColor,
   CancelColor,
   CheckColor,
   FontColorBlack,
   HeaderColor,
   MainFontColor,
} from '../../utils/Styles';
import {QuizStartModalProps} from '../types/componentType';

const QuizStartModal = ({
   quizStartModalVisible,
   setQuizStartModalVisible,
   selectedOption,
   navigation,
   setStartTime,
   setIsFinish,
}: QuizStartModalProps) => {
   const closeHandler = () => {
      setQuizStartModalVisible(false);
      setTimeout(() => {
         navigation.goBack();
      }, 300);
   };
   const checkHandler = () => {
      setStartTime(moment());
      setQuizStartModalVisible(false);
      setIsFinish(false);
   };
   return (
      <Modal
         isVisible={quizStartModalVisible}
         onBackButtonPress={closeHandler}
         testID="closeButton"
      >
         <View style={styles.contentBox}>
            <TouchableOpacity
               style={styles.alignSelfEnd}
               onPress={closeHandler}
            >
               <Icon type="ionicon" color={FontColorBlack} name="ios-close" />
            </TouchableOpacity>
            <Text style={styles.titleText}>
               아래 내용으로 퀴즈를 시작하시겠습니까?
            </Text>
            <Text style={styles.textStyle}>
               퀴즈 종목 : {selectedOption.category}
            </Text>
            <Text style={styles.textStyle}>
               난이도 : {selectedOption.difficulty}
            </Text>
            <Text style={styles.textStyle}>
               퀴즈 형식 : {selectedOption.type}
            </Text>
            <Text style={styles.textStyle}>
               총문항 : {selectedOption.amount}
            </Text>
            <View style={styles.buttonContainer}>
               <TouchableOpacity
                  onPress={checkHandler}
                  style={styles.checkButtonBox}
                  testID="checkButton"
               >
                  <Text style={styles.checkButtonText}>확인</Text>
               </TouchableOpacity>
               <TouchableOpacity
                  onPress={closeHandler}
                  style={styles.cancelButtonBox}
               >
                  <Text style={styles.cancelButtonText}>취소</Text>
               </TouchableOpacity>
            </View>
         </View>
      </Modal>
   );
};

export default React.memo(QuizStartModal);

const styles = StyleSheet.create({
   contentBox: {
      backgroundColor: BackgroundColor,
      minHeight: '30%',
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
