import React from 'react';
import {StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {useSelector} from 'react-redux';
import {
   backgroundColor,
   C00C9B7,
   disabledColor,
   SubFontColor,
} from '../../utils/Colors';
import {
   MainStackScreenHeaderProps,
   SolvingQuizStackScreenHeaderProps,
} from '../types/componentType';

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
      color: C00C9B7,
      fontWeight: '900',
      fontSize: 18,
   },
   confirmMessageBox: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
   },
});

const SolvingQuizHeader = ({
   navigation,
   title,
}: SolvingQuizStackScreenHeaderProps) => {
   const getQuiz = useSelector((state: any) => state.slice.results);

   return (
      <View style={styles.container} testID="MainStackScreenHeader">
         <View style={styles.arrowBox}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
               <Icon type="material" name="arrow-back-ios" />
            </TouchableOpacity>
         </View>
         <View style={styles.headerTitleBox}>
            <Text style={styles.headerTitle}>{title}</Text>
         </View>
         <TouchableOpacity style={styles.confirmMessageBox} activeOpacity={0.6}>
            <Text
               style={{
                  fontSize: 15,
                  fontWeight: '600',
               }}>
               퀴즈 풀이
            </Text>
         </TouchableOpacity>
      </View>
   );
};

export default SolvingQuizHeader;
