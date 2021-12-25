import React from 'react';
import {render} from '@testing-library/react-native';
import QuizCorrectMent from '../modules/QuizMain/Components/QuizCorrectMent';

describe('CorrectMent render well?', () => {
   test('render well?', () => {
      const rendered = render(
         <QuizCorrectMent
            currentQuizAmount={0}
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
   });
});
