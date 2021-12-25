import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import WrongAnswerListItem from '../modules/QuizMain/Components/WrongAnswerListItem';
import {WrongAnswerListItemProps} from '../modules/QuizMain/types/componentType';

const mockProps: WrongAnswerListItemProps = {
   goToWrongAnswerNoteHandler: jest.fn(),
   deleteWrongAnswerNoteHandler: jest.fn(),
   wrongAnswerNoteItem: {
      selectAnswer: [],
      getQuizTimer: {hour: '', minuts: '', seconds: ''},
      getShuffleQuiz: [],
      quizId: '',
      result: {correct: 0, inCorrect: 0},
      selectedOption: {amount: 0, category: '', difficulty: '', type: ''},
      solvedDate: '',
      startTime: '',
   },
};
describe('WrongAnswerListItem render well?', () => {
   test('WrongAnswerListItem rendering test', () => {
      render(<WrongAnswerListItem {...mockProps} />);
   });
   test('WrongAnswerListItem button test', () => {
      const rendered = render(<WrongAnswerListItem {...mockProps} />);
      const getGotoWrongAnswerNote = rendered.getByTestId(
         'goToWrongAnswerNoteHandler',
      );
      fireEvent(getGotoWrongAnswerNote, 'onPress');
      expect(mockProps.goToWrongAnswerNoteHandler).toBeCalledTimes(1);

      const deleteWrongAnswerNoteButton = rendered.getByTestId(
         'deleteWrongAnswerNoteHandler',
      );
      fireEvent(deleteWrongAnswerNoteButton, 'onPress');
      expect(mockProps.deleteWrongAnswerNoteHandler).toBeCalledTimes(1);
   });
});
