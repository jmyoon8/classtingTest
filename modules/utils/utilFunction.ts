import {GetQuizParamProps} from '../QuizMain/types/quizMainStackNavigationTypes';
import {quizOptions} from './QuizOptions';

export const getParsingQuizOption = (
   selectedCategory: string,
   difficulty: string,
   quizType: string,
   numberOfQuiz: number,
): GetQuizParamProps => {
   let getCategoryNumber =
      quizOptions.SelectCategory.indexOf(selectedCategory) + 9;

   let getDifficulty = '';
   let getType = '';
   if (difficulty === '쉬움') {
      getDifficulty = 'easy';
   } else if (difficulty === '보통') {
      getDifficulty = 'medium';
   } else if (difficulty === '어려움') {
      getDifficulty = 'hard';
   }
   if (quizType === '객관식') {
      getType = 'multiple';
   } else {
      getType = 'boolean';
   }
   return {
      category: getCategoryNumber,
      amount: numberOfQuiz * 10,
      difficulty: getDifficulty,
      type: getType,
   };
};
