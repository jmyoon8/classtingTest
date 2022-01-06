import {getParsingQuizOption} from '../modules/utils/utilFunction';

/**
 * @format
 */
describe('functionTest', () => {
   test('getParsingQuizOption return UrlParam?', () => {
      const getParsingQuizOptionParamsEasy = {
         difficulty: '쉬움',
         numberOfQuiz: 1,
         quizType: '객관식',
         selectedCategory: '일반상식',
      };
      const getParsingDataEasy = getParsingQuizOption(
         getParsingQuizOptionParamsEasy.selectedCategory,
         getParsingQuizOptionParamsEasy.difficulty,
         getParsingQuizOptionParamsEasy.quizType,
         getParsingQuizOptionParamsEasy.numberOfQuiz,
      );
      expect(getParsingDataEasy.amount).toBe(10);
      expect(getParsingDataEasy.category).toBe(9);
      expect(getParsingDataEasy.difficulty).toBe('easy');
      expect(getParsingDataEasy.type).toBe('multiple');

      const getParsingQuizOptionParamsMedium = {
         difficulty: '보통',
         numberOfQuiz: 1,
         quizType: '객관식',
         selectedCategory: '일반상식',
      };
      const getParsingDataMedium = getParsingQuizOption(
         getParsingQuizOptionParamsMedium.selectedCategory,
         getParsingQuizOptionParamsMedium.difficulty,
         getParsingQuizOptionParamsMedium.quizType,
         getParsingQuizOptionParamsMedium.numberOfQuiz,
      );
      expect(getParsingDataMedium.amount).toBe(10);
      expect(getParsingDataMedium.category).toBe(9);
      expect(getParsingDataMedium.difficulty).toBe('medium');
      expect(getParsingDataMedium.type).toBe('multiple');

      const getParsingQuizOptionParamsHard = {
         difficulty: '어려움',
         numberOfQuiz: 1,
         quizType: '객관식',
         selectedCategory: '일반상식',
      };
      const getParsingDataHard = getParsingQuizOption(
         getParsingQuizOptionParamsHard.selectedCategory,
         getParsingQuizOptionParamsHard.difficulty,
         getParsingQuizOptionParamsHard.quizType,
         getParsingQuizOptionParamsHard.numberOfQuiz,
      );
      expect(getParsingDataHard.amount).toBe(10);
      expect(getParsingDataHard.category).toBe(9);
      expect(getParsingDataHard.difficulty).toBe('hard');
      expect(getParsingDataHard.type).toBe('multiple');
   });
});
