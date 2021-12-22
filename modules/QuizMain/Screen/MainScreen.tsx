import React, {useState, useLayoutEffect, useEffect} from 'react';
import {Alert, ScrollView, StyleSheet, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Slider} from 'react-native-elements/dist/slider/Slider';
import {quizOptions} from '../../utils/QuizOptions';
import {
   HeaderColor,
   C56D8AE,
   MainFontColor,
   SliderThumbColor,
   SliderTrackColor,
   SubFontColor,
   BackgroundColor,
} from '../../utils/Styles';
import {MainStackScreenProps} from '../types/quizMainStackNavigationTypes';
import MainStackScreenHeader from '../Components/MainStackScreenHeader';
import {getParsingQuizOption} from '../../utils/utilFunction';
import {getQuizThunk} from '../../utils/Redux/slice';
import AccordianContent from '../Components/AccordianContent';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {ListItem} from 'react-native-elements';

const MainScreen = ({navigation}: MainStackScreenProps) => {
   const [numberOfQuiz, setNumberOfQuiz] = useState(1);
   const [selectedCategory, setSelectedCategory] = useState('');
   const [difficulty, setDifficulty] = useState('');
   const [quizType, setQuizType] = useState('');

   const [isNumberOfQuizExtends, setIsNumberQuizExtends] = useState(false);
   const [isCategoryExtends, setIsCategoryExtends] = useState(false);
   const [isDifficultyExtends, setIsDifficultyExtends] = useState(false);
   const [isQuizType, setIsQuizType] = useState(false);

   const categoryHandler = (category: string) => {
      setSelectedCategory(category);
      setIsCategoryExtends(false);
   };
   const difficultyHandler = (difficulty: string) => {
      setDifficulty(difficulty);
      setIsDifficultyExtends(false);
   };
   const quizTypeHandler = (quizType: string) => {
      setQuizType(quizType);
      setIsQuizType(false);
   };
   useLayoutEffect(() => {
      navigation.setOptions({
         header: () => (
            <MainStackScreenHeader
               title="퀴즈 고르기"
               navigation={navigation}
               difficulty={difficulty}
               numberOfQuiz={numberOfQuiz}
               quizType={quizType}
               category={selectedCategory}
            />
         ),
      });
   }, [difficulty, numberOfQuiz, quizType, selectedCategory]);

   const dispatcher = useDispatch();
   const getQuiz = useSelector((state: any) => state.slice.results);

   useEffect(() => {
      const getParsing = getParsingQuizOption(
         selectedCategory,
         difficulty,
         quizType,
         numberOfQuiz,
      );
      if (selectedCategory && difficulty && quizType && numberOfQuiz) {
         dispatcher(getQuizThunk(getParsing));
      }
   }, [selectedCategory, difficulty, quizType, numberOfQuiz]);
   useEffect(() => {
      if (selectedCategory && difficulty && quizType && numberOfQuiz) {
         if (getQuiz.length <= 0) {
            Alert.alert('퀴즈가 없습니다 다른옵션으로 다시 검색해주세요!');
         }
      }
   }, [getQuiz]);

   return (
      <>
         <ScrollView bounces={false} style={styles.container}>
            <ListItem.Accordion
               testID="numberOfQuiz"
               hasTVPreferredFocus={undefined}
               tvParallaxProperties={undefined}
               containerStyle={styles.accordionContentStyle}
               content={
                  <AccordianContent
                     Icon={() => (
                        <Icon
                           type="feather"
                           name="plus-square"
                           color={HeaderColor}
                           size={30}
                        />
                     )}
                     title="총 문항"
                     subTitle={`${numberOfQuiz * 10} 문항`}
                  />
               }
               isExpanded={isNumberOfQuizExtends}
               onPress={() => setIsNumberQuizExtends(!isNumberOfQuizExtends)}>
               <View style={styles.sliderContainer}>
                  <Slider
                     value={numberOfQuiz}
                     onValueChange={setNumberOfQuiz}
                     animationType="timing"
                     maximumValue={5}
                     minimumValue={1}
                     step={1}
                     trackStyle={styles.silderTrackStyle}
                     allowTouchTrack
                     thumbStyle={{
                        width: 30,
                        height: 30,
                        backgroundColor: SliderThumbColor,
                     }}
                  />
               </View>
            </ListItem.Accordion>

            <ListItem.Accordion
               testID="quizDifficulty"
               hasTVPreferredFocus={undefined}
               tvParallaxProperties={undefined}
               containerStyle={styles.accordionContentStyle}
               content={
                  <AccordianContent
                     Icon={() => (
                        <Icon
                           type="entypo"
                           color={HeaderColor}
                           name="pencil"
                           size={30}
                        />
                     )}
                     subTitle={difficulty}
                     title="퀴즈 난이도"
                  />
               }
               isExpanded={isDifficultyExtends}
               onPress={() => {
                  setIsDifficultyExtends(!isDifficultyExtends);
               }}>
               {isDifficultyExtends && (
                  <>
                     {quizOptions.SelectDifficulty.map(difficulty => (
                        <ListItem
                           key={difficulty}
                           onPress={() => difficultyHandler(difficulty)}
                           bottomDivider
                           hasTVPreferredFocus={undefined}
                           tvParallaxProperties={undefined}>
                           <Text style={styles.accordionContentBoxSubFont}>
                              {difficulty}
                           </Text>
                        </ListItem>
                     ))}
                  </>
               )}
            </ListItem.Accordion>
            <ListItem.Accordion
               testID="quizType"
               hasTVPreferredFocus={undefined}
               tvParallaxProperties={undefined}
               containerStyle={styles.accordionContentStyle}
               content={
                  <AccordianContent
                     Icon={() => (
                        <Icon
                           type="antdesign"
                           color={HeaderColor}
                           name="checksquareo"
                           size={30}
                        />
                     )}
                     subTitle={quizType}
                     title="퀴즈 형식"
                  />
               }
               isExpanded={isQuizType}
               onPress={() => {
                  setIsQuizType(!isQuizType);
               }}>
               {isQuizType && (
                  <>
                     {quizOptions.SelectType.map(quizType => (
                        <ListItem
                           key={quizType}
                           onPress={() => quizTypeHandler(quizType)}
                           bottomDivider
                           hasTVPreferredFocus={undefined}
                           tvParallaxProperties={undefined}>
                           <Text style={styles.accordionContentBoxSubFont}>
                              {quizType}
                           </Text>
                        </ListItem>
                     ))}
                  </>
               )}
            </ListItem.Accordion>
            <ListItem.Accordion
               testID="quizCategory"
               hasTVPreferredFocus={undefined}
               tvParallaxProperties={undefined}
               containerStyle={styles.accordionContentStyle}
               content={
                  <AccordianContent
                     Icon={() => (
                        <Icon
                           type="material"
                           color={HeaderColor}
                           name="category"
                           size={30}
                        />
                     )}
                     subTitle={selectedCategory}
                     title="퀴즈 유형"
                  />
               }
               isExpanded={isCategoryExtends}
               onPress={() => {
                  setIsCategoryExtends(!isCategoryExtends);
               }}>
               {isCategoryExtends && (
                  <>
                     {quizOptions.SelectCategory.map(category => (
                        <ListItem
                           key={category}
                           onPress={() => categoryHandler(category)}
                           bottomDivider
                           hasTVPreferredFocus={undefined}
                           tvParallaxProperties={undefined}>
                           <Text style={styles.accordionContentBoxSubFont}>
                              {category}
                           </Text>
                        </ListItem>
                     ))}
                  </>
               )}
            </ListItem.Accordion>
         </ScrollView>
      </>
   );
};

export default MainScreen;

const styles = StyleSheet.create({
   container: {
      paddingHorizontal: 12,
      paddingTop: 10,
      height: '100%',
      backgroundColor: BackgroundColor,
   },
   accordionContentStyle: {
      paddingHorizontal: 4,
      borderBottomWidth: 1.3,
      borderBottomColor: C56D8AE,
   },
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
   sliderContainer: {
      paddingHorizontal: 20,
   },
   silderTrackStyle: {
      backgroundColor: SliderTrackColor,
      width: '100%',
      justifyContent: 'center',
      height: 5,
   },
});
