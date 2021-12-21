import React from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
   backgroundColor,
   C00C9B7,
   disabledColor,
   SubFontColor,
} from '../../utils/Colors';
import {getParsingQuizOption} from '../../utils/utilFunction';
import {MainStackScreenHeaderProps} from '../types/componentType';
import {MainStackScreenHeaderNavigationProps} from '../types/quizMainStackNavigation';

const styles = StyleSheet.create({
   container: {
      backgroundColor: backgroundColor,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
   },
   headerTitle: {
      color: C00C9B7,
      fontWeight: '900',
      fontSize: 18,
   },
});

const MainStackScreenHeader = ({
   navigation,
   title,
   difficulty,
   quizType,
   selectedCategory,
   numberOfQuiz,
}: MainStackScreenHeaderProps) => {
   const confirm = selectedCategory && difficulty && quizType;
   return (
      <View style={styles.container} testID="MainStackScreenHeader">
         <View>
            {navigation.canGoBack() && (
               <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Icon type="material" name="arrow-back-ios" />
               </TouchableOpacity>
            )}
         </View>
         <Text style={styles.headerTitle}>{title}</Text>

         <TouchableOpacity
            onPress={
               confirm
                  ? () =>
                       navigation.navigate(
                          'GetQuizScreen',
                          getParsingQuizOption(
                             selectedCategory,
                             difficulty,
                             quizType,
                             numberOfQuiz,
                          ),
                       )
                  : () => Alert.alert('옵션을 모두 선택해주세요!')
            }
            activeOpacity={0.6}>
            <Text
               style={{
                  color: confirm ? SubFontColor : disabledColor,
                  fontSize: 16,
                  fontWeight: '700',
               }}>
               확인
            </Text>
         </TouchableOpacity>
      </View>
   );
};

export default MainStackScreenHeader;
