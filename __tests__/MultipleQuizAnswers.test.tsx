import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import MultipleQuizAnswers from '../modules/QuizMain/Components/MultipleQuizAnswers';
import {MultipleQuizAnswersProps} from '../modules/QuizMain/types/componentType';
describe('MultipleQuizAnswers render test', () => {
   test('render well and selectAnswer Correctly? ', () => {
      const answerArr: number[] = Array(10).fill(undefined);
      const currentQuizAmount = 1;
      const selectHandler = (selectedAnswer: any) => {
         answerArr.splice(currentQuizAmount - 1, 1, selectedAnswer);
      };
      const mockProps: MultipleQuizAnswersProps = {
         currentQuizAmount: 1,
         currentQuizInfo: {
            answers: ['Cinnamon', 'Vanilla', 'Cardamom', 'Saffron'],
            correct_answer: 'Saffron',
            incorrect_answers: ['Cinnamon', 'Cardamom', 'Vanilla', 'Saffron'],
            question:
               'What is the world&#039;s most expensive spice by weight?',
            type: 'multiple',
         },
         selectAnswer: answerArr,
         selectAnswerHandler: selectHandler,
      };
      const rendered = render(<MultipleQuizAnswers {...mockProps} />);
      const answers = mockProps.currentQuizInfo.answers;
      for (let i = 0; i < answers.length; i++) {
         const getOnPress = rendered.getByTestId(answers[i]);
         fireEvent(getOnPress, 'onPress');
         expect(answerArr).toContain(answers[i]);
      }
   });
});
