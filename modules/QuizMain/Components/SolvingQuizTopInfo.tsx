import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
   SolvingQuizTopInfoBackGround,
   SolvingQuizTopInfoBorderColor,
   SolvingQuizTopInfoTextColor,
} from '../../utils/Styles';
import {SolvingQuizTopInfoProps} from '../types/componentType';

const SolvingQuizTopInfo = ({subTitle, title}: SolvingQuizTopInfoProps) => {
   return (
      <View style={styles.topInfoBox}>
         <Text style={styles.text}>{title}</Text>
         <Text style={styles.text}>{subTitle}</Text>
      </View>
   );
};

export default SolvingQuizTopInfo;

const styles = StyleSheet.create({
   topInfoBox: {
      borderWidth: 0.5,
      borderColor: SolvingQuizTopInfoBorderColor,
      flex: 1,
      borderLeftWidth: 0,
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: SolvingQuizTopInfoBackGround,
      height: '100%',
      paddingHorizontal: 4,
   },
   text: {
      color: SolvingQuizTopInfoTextColor,
      fontSize: 14,
      fontWeight: 'bold',
   },
});
