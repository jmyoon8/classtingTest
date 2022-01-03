import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import QuizAnswers from '../modules/QuizMain/Components/QuizAnswers';
import {QuizAnswersProps} from '../modules/QuizMain/types/componentType';

describe('QuizAnswers render test', () => {
   test('render well and selectAnswer Correctly?', () => {
      const answerArr: string[] = Array(10).fill(undefined);
      const currentQuizAmount = 1;
      const selectHandler = (selectedAnswer: any) => {
         answerArr.splice(currentQuizAmount - 1, 1, selectedAnswer);
      };
      const mockProps: QuizAnswersProps = {
         currentQuizAmount: 1,
         currentQuizInfo: {
            answers: ['Cinnamon', 'Vanilla', 'Cardamom', 'Saffron'],
            correct_answer: 'Saffron',
            incorrect_answers: ['Cinnamon', 'Cardamom', 'Vanilla', 'Saffron'],
            question:
               'What is the world&#039;s most expensive spice by weight?',
            type: 'multiple',
            difficulty: '',
         },
         selectAnswer: answerArr,
         selectAnswerHandler: selectHandler,
         isWrongAnswerView: false,
      };
      const rendered = render(<QuizAnswers {...mockProps} />);
      const answers = mockProps.currentQuizInfo.answers;
      for (let i = 0; i < answers.length; i++) {
         const getOnPress = rendered.getByTestId(answers[i]);
         fireEvent(getOnPress, 'onPress');
         expect(answerArr).toContain(answers[i]);
      }
   });
});
