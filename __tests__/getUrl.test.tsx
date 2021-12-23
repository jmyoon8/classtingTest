import {getParsingQuizOption} from '../modules/utils/utilFunction';

/**
 * @format
 */
describe('functionTest', () => {
   test('getParsingQuizOption return UrlParam?', () => {
      const getParsingQuizOptionParams = {
         difficulty: '쉬움',
         numberOfQuiz: 1,
         quizType: '객관식',
         selectedCategory: '일반상식',
      };

      const getParsingData = getParsingQuizOption(
         getParsingQuizOptionParams.selectedCategory,
         getParsingQuizOptionParams.difficulty,
         getParsingQuizOptionParams.quizType,
         getParsingQuizOptionParams.numberOfQuiz,
      );
      expect(getParsingData.amount).toBe(10);
      expect(getParsingData.category).toBe(9);
      expect(getParsingData.difficulty).toBe('easy');
      expect(getParsingData.type).toBe('multiple');
   });
});

export {};
