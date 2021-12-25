import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {QuizeExplorerProps} from '../modules/QuizMain/types/componentType';
import QuizExplorer from '../modules/QuizMain/Components/QuizExplorer';

const mockProps: QuizeExplorerProps = {
   currentQuizAmount: 2,
   quizExplorerHandler: jest
      .fn()
      .mockImplementation((whereGoing: 'next' | 'prev') => {
         if (whereGoing === 'next') {
            mockProps.currentQuizAmount++;
         } else {
            mockProps.currentQuizAmount--;
         }
      }),
   selectAnswer: ['고른답1', '고른답2'],
};
describe('QuizFinishModal render well?', () => {
   test('rendering test', () => {
      render(<QuizExplorer {...mockProps} />);
   });
   test('button test', () => {
      const rendered = render(<QuizExplorer {...mockProps} />);
      const nextButton = rendered.getByTestId('next');
      fireEvent(nextButton, 'onPress');
      expect(mockProps.quizExplorerHandler).toBeCalledTimes(1);
      expect(mockProps.quizExplorerHandler).toBeCalledWith('next');
      expect(mockProps.currentQuizAmount).toBe(3);

      const prevButton = rendered.getByTestId('prev');
      fireEvent(prevButton, 'onPress');
      expect(mockProps.quizExplorerHandler).toBeCalledTimes(2);
      expect(mockProps.quizExplorerHandler).toBeCalledWith('prev');
      expect(mockProps.currentQuizAmount).toBe(2);
   });
});
