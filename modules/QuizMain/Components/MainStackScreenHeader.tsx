import React from 'react';
import {StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {useSelector} from 'react-redux';
import {
   backgroundColor,
   HeaderColor,
   disabledColor,
   SubFontColor,
} from '../../utils/Colors';
import {getParsingQuizOption} from '../../utils/utilFunction';
import {MainStackScreenHeaderProps} from '../types/componentType';

const styles = StyleSheet.create({
   container: {
      backgroundColor: backgroundColor,
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 44,
      paddingHorizontal: 16,
      alignItems: 'center',
   },
   arrowBox: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
   },
   headerTitleBox: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
   },
   headerTitle: {
      color: HeaderColor,
      fontWeight: '900',
      fontSize: 18,
   },
   confirmMessageBox: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
   },
});

const MainStackScreenHeader = ({
   navigation,
   title,
   difficulty,
   numberOfQuiz,
   category,
   quizType,
}: MainStackScreenHeaderProps) => {
   const getQuiz = useSelector((state: any) => state.slice.results);
   const headerConfirmHandler = () => {
      if (getQuiz.length > 0) {
         navigation.navigate('SolvingQuiz', {
            apiOption: getParsingQuizOption(
               category,
               difficulty,
               quizType,
               numberOfQuiz,
            ),
            selectedOption: {
               amount: numberOfQuiz * 10,
               category: category,
               difficulty: difficulty,
               type: quizType,
            },
         });
      } else {
         Alert.alert('옵션을 모두 선택해주세요!');
      }
   };
   return (
      <View style={styles.container} testID="MainStackScreenHeader">
         <View style={styles.arrowBox}>
            {navigation.canGoBack() && (
               <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Icon type="material" name="arrow-back-ios" />
               </TouchableOpacity>
            )}
         </View>
         <View style={styles.headerTitleBox}>
            <Text style={styles.headerTitle}>{title}</Text>
         </View>
         <TouchableOpacity
            onPress={headerConfirmHandler}
            style={styles.confirmMessageBox}
            activeOpacity={0.6}>
            <Text
               style={{
                  color: getQuiz.length > 0 ? SubFontColor : disabledColor,
                  fontSize: 15,
                  fontWeight: '700',
               }}>
               {getQuiz.length > 0 ? '퀴즈 풀러가기!' : '퀴즈를 골라주세요!'}
            </Text>
         </TouchableOpacity>
      </View>
   );
};

export default MainStackScreenHeader;
