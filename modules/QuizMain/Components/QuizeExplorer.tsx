import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {
   BackgroundColor,
   CorrectColor,
   InCorrectColor,
} from '../../utils/Styles';
import {QuizeExplorerProps} from '../types/componentType';

const QuizeExplorer = ({
   currentQuizAmount,
   quizExplorerHandler,
   selectAnswer,
}: QuizeExplorerProps) => {
   return (
      <View style={styles.quizExplorerContainer}>
         {currentQuizAmount - 1 !== 0 && (
            <TouchableOpacity
               onPress={() => quizExplorerHandler('prev')}
               activeOpacity={0.6}
               style={styles.quizExplorerBeforeBox}>
               <Icon
                  color={BackgroundColor}
                  type="antdesign"
                  name="caretleft"
               />
               <Text style={styles.quizExplorerText}>이전</Text>
            </TouchableOpacity>
         )}
         {selectAnswer[currentQuizAmount - 1] && (
            <TouchableOpacity
               onPress={() => quizExplorerHandler('next')}
               activeOpacity={0.6}
               style={styles.quizExplorerNextBox}>
               <Text style={styles.quizExplorerText}>다음</Text>
               <Icon
                  color={BackgroundColor}
                  type="antdesign"
                  name="caretright"
               />
            </TouchableOpacity>
         )}
      </View>
   );
};

export default QuizeExplorer;

const styles = StyleSheet.create({
   quizExplorerContainer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: 40,
      flexDirection: 'row',
   },
   quizExplorerBeforeBox: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: InCorrectColor,
   },
   quizExplorerNextBox: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: CorrectColor,
      flexDirection: 'row',
   },
   quizExplorerText: {
      fontWeight: 'bold',
      fontSize: 16,
      color: BackgroundColor,
   },
});
