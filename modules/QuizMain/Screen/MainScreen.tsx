import React, {useState, useLayoutEffect, useEffect} from 'react';
import {Text, ListItem, Icon} from 'react-native-elements';
import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import {quizOptions} from '../../utils/QuizOptions';
import {Slider} from 'react-native-elements/dist/slider/Slider';
import {
   backgroundColor,
   C00C9B7,
   C56D8AE,
   MainFontColor,
   SliderThumbColor,
   SliderTrackColor,
   SubFontColor,
} from '../../utils/Colors';
import {MainStackScreenProps} from '../types/quizMainStackNavigation';
import MainStackScreenHeader from '../Components/MainStackScreenHeader';
import {getParsingQuizOption} from '../../utils/utilFunction';
import {useDispatch, useSelector} from 'react-redux';
import {getQuizThunk} from '../../utils/Redux/slice';

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
               title="문제 고르기"
               navigation={navigation}
            />
         ),
      });
   }, []);
   const dispatcher = useDispatch();
   const getQuize = useSelector((state: any) => state.slice.results);

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
         if (getQuize.length <= 0) {
            Alert.alert('문제가 없습니다 다른옵션으로 다시 검색해주세요!');
         }
      }
   }, [getQuize]);
   return (
      <ScrollView bounces={false} style={styles.container}>
         <ListItem.Accordion
            testID="numberOfQuiz"
            hasTVPreferredFocus={undefined}
            tvParallaxProperties={undefined}
            containerStyle={styles.accordionContentStyle}
            content={
               <View style={styles.accordionContent}>
                  <View style={styles.accordionContentBox}>
                     <Icon
                        type="feather"
                        name="plus-square"
                        color={C00C9B7}
                        tvParallaxProperties={undefined}
                        size={30}
                     />

                     <ListItem.Title
                        style={[
                           styles.accordionContentBoxMainFont,
                           styles.marginLeft8,
                        ]}>
                        문항 갯수
                     </ListItem.Title>
                  </View>
                  <Text style={styles.accordionContentBoxSubFont}>
                     {numberOfQuiz * 10}문제
                  </Text>
               </View>
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
               <View style={styles.accordionContent}>
                  <View style={styles.accordionContentBox}>
                     <Icon
                        tvParallaxProperties={undefined}
                        type="entypo"
                        color={C00C9B7}
                        name="pencil"
                        size={30}
                     />
                     <ListItem.Title
                        style={[
                           styles.accordionContentBoxMainFont,
                           styles.marginLeft8,
                        ]}>
                        문제 난이도
                     </ListItem.Title>
                  </View>
                  <Text style={styles.accordionContentBoxSubFont}>
                     {difficulty}
                  </Text>
               </View>
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
               <View style={styles.accordionContent}>
                  <View style={styles.accordionContentBox}>
                     <Icon
                        tvParallaxProperties={undefined}
                        type="antdesign"
                        color={C00C9B7}
                        name="checksquareo"
                        size={30}
                     />
                     <ListItem.Title
                        style={[
                           styles.accordionContentBoxMainFont,
                           styles.marginLeft8,
                        ]}>
                        문제 형식
                     </ListItem.Title>
                  </View>
                  <Text style={styles.accordionContentBoxSubFont}>
                     {quizType}
                  </Text>
               </View>
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
               <View style={styles.accordionContent}>
                  <View style={styles.accordionContentBox}>
                     <Icon
                        tvParallaxProperties={undefined}
                        type="material"
                        color={C00C9B7}
                        name="category"
                        size={30}
                     />
                     <ListItem.Title
                        style={[
                           styles.accordionContentBoxMainFont,
                           styles.marginLeft8,
                        ]}>
                        문제 유형
                     </ListItem.Title>
                  </View>
                  <Text style={styles.accordionContentBoxSubFont}>
                     {selectedCategory}
                  </Text>
               </View>
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
   );
};

export default MainScreen;

const styles = StyleSheet.create({
   container: {
      paddingHorizontal: 12,
      paddingTop: 10,
      height: '100%',
      backgroundColor: backgroundColor,
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
