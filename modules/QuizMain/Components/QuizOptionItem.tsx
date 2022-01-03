import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {BottomDividerColor, SubFontColor} from '../../utils/Styles';
import {QuizOptionPoprs} from '../types/componentType';

const QuizOptionItem = ({option, optionHandler}: QuizOptionPoprs) => {
   return (
      <TouchableOpacity
         activeOpacity={0.4}
         key={option}
         onPress={() => optionHandler(option)}
         style={styles.listItemContainer}
      >
         <Text style={styles.accordionContentBoxSubFont}>{option}</Text>
      </TouchableOpacity>
   );
};

export default QuizOptionItem;

const styles = StyleSheet.create({
   listItemContainer: {
      height: 43.3,
      justifyContent: 'center',
      paddingHorizontal: 14,
      borderBottomColor: BottomDividerColor,
      borderBottomWidth: 0.3,
   },
   accordionContentBoxSubFont: {
      color: SubFontColor,
      fontWeight: '700',
      marginVertical: 4,
   },
});
