import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import QuizFinishModal from '../modules/QuizMain/Components/QuizFinishModal';
import {QuizFinishModalProps} from '../modules/QuizMain/types/componentType';
import {navigationMocking} from '../mock';
import {MockingProvier} from '../testUtil/testUtils';

const mockProps: QuizFinishModalProps = {
   getShuffleQuiz: [
      {
         answers: [''],
         correct_answer: '',
         difficulty: '',
         incorrect_answers: [],
         question: '',
         type: '',
      },
   ],
   isWrongAnswerView: false,
   navigation: navigationMocking,
   quizFinishModalVisible: false,
   quizId: '',
   selectAnswer: [],
   selectedOption: {amount: 1, type: '', difficulty: '', category: ''},
   setCurrentQuizAmount: jest.fn(),
   setIsReplay: jest.fn(),
   setIsWrongAnswerView: jest.fn(),
   setQuizFinishModalVisible: jest.fn(),
   setQuizStartModalVisible: jest.fn(),
   setSelectAnswer: jest.fn(),
   startTime: '',
};
describe('QuizFinishModal render well?', () => {
   test('rendering test', () => {
      const rendered = render(
         <MockingProvier
            Component={() => <QuizFinishModal {...mockProps} />}
         />,
      );
      expect(rendered).toBeTruthy();
   });
   test('button test', () => {
      const rendered = render(
         <MockingProvier
            Component={() => <QuizFinishModal {...mockProps} />}
         />,
      );

      const replayQuizButton = rendered.getByTestId('replayQuizHandler');
      const insertWrongAnswerNoteButton = rendered.getByTestId(
         'insertWrongAnswerNote',
      );
      const selectAnotherQuizButton = rendered.getByTestId(
         'selectAnotherQuizHandler',
      );
      fireEvent(replayQuizButton, 'onPress');
      fireEvent(selectAnotherQuizButton, 'onPress');
      fireEvent(insertWrongAnswerNoteButton, 'onPress');

      expect(mockProps.setCurrentQuizAmount).toBeCalledTimes(2);
      expect(mockProps.setCurrentQuizAmount).toBeCalledWith(1);

      expect(mockProps.setIsReplay).toBeCalledTimes(1);

      expect(mockProps.setIsWrongAnswerView).toBeCalledTimes(2);

      expect(mockProps.setQuizFinishModalVisible).toBeCalledTimes(2);

      expect(mockProps.setQuizStartModalVisible).toBeCalledTimes(1);

      expect(mockProps.setSelectAnswer).toBeCalledTimes(1);
   });
});
