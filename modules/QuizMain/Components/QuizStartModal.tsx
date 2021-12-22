import React, {useEffect} from 'react';
import {BackHandler, StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {backgroundColor, HeaderColor, MainFontColor} from '../../utils/Colors';
import {QuizStartModalProps} from '../types/componentType';
import moment from 'moment';
import {v5 as uuid} from 'uuid';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements/dist/icons/Icon';

const QuizStartModal = ({
   quizStartModalVisible,
   setQuizStartModalVisible,
   amount,
   category,
   difficulty,
   type,
   navigation,
}: QuizStartModalProps) => {
   const now = moment();
   const closeHandler = () => {
      return false;
   };
   useEffect(() => {
      const backHandler = BackHandler.addEventListener(
         'hardwareBackPress',
         () => closeHandler(),
      );
   }, []);
   return (
      <Modal
         isVisible={quizStartModalVisible}
         onBackdropPress={() => setQuizStartModalVisible(false)}>
         <View style={styles.contentBox}>
            <TouchableOpacity
               style={{alignSelf: 'flex-end'}}
               onPress={() => navigation.goBack()}>
               <Icon type="ionicon" name="ios-close" />
            </TouchableOpacity>
            <Text style={styles.textStyle}>퀴즈 종목 : {category}</Text>
            <Text style={styles.textStyle}>난이도 : {difficulty}</Text>
            <Text style={styles.textStyle}>퀴즈 형식 : {type}</Text>
            <Text style={styles.textStyle}>총문항 : {amount}</Text>
            <View>
               <Text
                  style={{
                     color: MainFontColor,
                     alignSelf: 'center',
                     fontSize: 15,
                  }}>
                  위에 내용으로 퀴즈를 시작하시겠습니까?
               </Text>
               <TouchableOpacity>
                  <Text>취소</Text>
               </TouchableOpacity>
               <TouchableOpacity></TouchableOpacity>
            </View>
         </View>
      </Modal>
   );
};

export default QuizStartModal;

const styles = StyleSheet.create({
   contentBox: {
      borderWidth: 1,
      backgroundColor: backgroundColor,
      height: '25%',
      borderRadius: 10,
      paddingTop: 4,
      paddingBottom: 14,
      paddingHorizontal: 12,
      justifyContent: 'space-around',
   },
   textStyle: {
      color: HeaderColor,
      fontSize: 14,
   },
});
