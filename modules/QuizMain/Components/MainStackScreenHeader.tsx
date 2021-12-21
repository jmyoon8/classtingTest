import React from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {
   backgroundColor,
   C00C9B7,
   disabledColor,
   SubFontColor,
} from '../../utils/Colors';
import {MainStackScreenHeaderProps} from '../types/componentType';

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
}: MainStackScreenHeaderProps) => {
   const getQuize = useSelector((state: any) => state.slice.results);

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
               getQuize.length > 0
                  ? () => navigation.navigate('GetQuizScreen')
                  : () => Alert.alert('옵션을 모두 선택해주세요!')
            }
            activeOpacity={0.6}>
            <Text
               style={{
                  color: getQuize.length > 0 ? SubFontColor : disabledColor,
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
