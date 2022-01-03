import React from 'react';
import {render} from '@testing-library/react-native';
import QuizCorrectMent from '../modules/QuizMain/Components/QuizCorrectMent';

describe('CorrectMent render well?', () => {
   test('isCorrect?', () => {
      const rendered = render(
         <QuizCorrectMent
            currentQuizAmount={1}
            currentQuizInfo={{
               answers: ['testIsGood', 'testIsNotGood'],
               correct_answer: 'testIsGood',
               difficulty: '',
               incorrect_answers: [],
               question: '',
               type: '',
            }}
            selectAnswer={['testIsGood']}
         />,
      );

      expect(rendered.getByText('정답입니다!')).toBeTruthy();
   });
   test('isInCorrect?', () => {
      const rendered = render(
         <QuizCorrectMent
            currentQuizAmount={1}
            currentQuizInfo={{
               answers: ['testIsGood', 'testIsNotGood'],
               correct_answer: 'testIsGood',
               difficulty: '',
               incorrect_answers: [],
               question: '',
               type: '',
            }}
            selectAnswer={['testIsNotGood']}
         />,
      );

      expect(rendered.getByText('틀렸습니다!')).toBeTruthy();
   });
});
