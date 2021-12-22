import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MainFontColor, SubFontColor} from '../../utils/Styles';
import {AccordianContentProps} from '../types/componentType';

const AccordianContent = ({title, subTitle, Icon}: AccordianContentProps) => {
   return (
      <View style={styles.accordionContent}>
         <View style={styles.accordionContentBox}>
            <Icon />
            <View style={styles.marginLeft8}>
               <Text style={styles.accordionContentBoxMainFont}>{title}</Text>
            </View>
         </View>
         <Text style={styles.accordionContentBoxSubFont}>{subTitle}</Text>
      </View>
   );
};

export default AccordianContent;

const styles = StyleSheet.create({
   accordionContent: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   accordionContentBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   accordionContentBoxMainFont: {
      color: MainFontColor,
      fontWeight: '700',
      fontSize: 18,
   },
   accordionContentBoxSubFont: {
      color: SubFontColor,
      fontWeight: '700',
   },
   marginLeft8: {marginLeft: 8},
});
