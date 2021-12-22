import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {BackgroundColor, HeaderColor} from '../../utils/Styles';
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
});

const SolvingQuizHeader = ({
   navigation,
   title,
}: SolvingQuizStackScreenHeaderProps) => {
   return (
      <View style={styles.container}>
         <View style={styles.arrowBox}>
            <TouchableOpacity onPress={() => navigation.popToTop()}>
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
