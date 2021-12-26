import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {BackgroundColor, FontColorBlack, HeaderColor} from '../../utils/Styles';
import {SolvingQuizStackScreenHeaderProps} from '../types/componentType';

const styles = StyleSheet.create({
   container: {
      backgroundColor: BackgroundColor,
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
   headerRightText: {
      fontSize: 15,
      fontWeight: '600',
      color: FontColorBlack,
   },
});

const SolvingQuizHeader = ({
   navigation,
   title,
}: SolvingQuizStackScreenHeaderProps) => {
   return (
      <View style={styles.container}>
         <TouchableOpacity
            style={styles.arrowBox}
            onPress={() => navigation.popToTop()}
            testID="popToTop">
            <Icon color={'#000'} type="material" name="arrow-back-ios" />
         </TouchableOpacity>

         <View style={styles.headerTitleBox}>
            <Text style={styles.headerTitle}>{title}</Text>
         </View>
         <TouchableOpacity style={styles.confirmMessageBox} activeOpacity={0.6}>
            <Text style={styles.headerRightText}>퀴즈 풀이</Text>
         </TouchableOpacity>
      </View>
   );
};

export default SolvingQuizHeader;
