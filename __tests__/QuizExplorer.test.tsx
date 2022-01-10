import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {QuizExplorerProps} from '../modules/QuizMain/types/componentType';
import QuizExplorer from '../modules/QuizMain/Components/QuizExplorer';

const mockProps: QuizExplorerProps = {
   currentQuizAmount: 1,
   quizExplorerHandler: jest
      .fn()
      .mockImplementation((whereGoing: 'next' | 'prev') => {
         if (whereGoing === 'next') {
            mockProps.currentQuizAmount++;
         } else {
            mockProps.currentQuizAmount--;
         }
      }),
   selectAnswer: ['고른답1', '고른답2', '고른답3'],
};
describe('QuizFinishModal render well?', () => {
   test('rendering test', () => {
      const rendered = render(<QuizExplorer {...mockProps} />);
      expect(rendered).toBeTruthy();
   });
   test('button test', () => {
      const rendered = render(<QuizExplorer {...mockProps} />);
      const nextButton = rendered.getByTestId('next');
      fireEvent(nextButton, 'onPress');
      expect(mockProps.quizExplorerHandler).toBeCalledTimes(1);
      expect(mockProps.quizExplorerHandler).toBeCalledWith('next');
      expect(mockProps.currentQuizAmount).toBe(2);

      const prevButton = rendered.getByTestId('prev');
      fireEvent(prevButton, 'onPress');
      expect(mockProps.quizExplorerHandler).toBeCalledTimes(2);
      expect(mockProps.quizExplorerHandler).toBeCalledWith('prev');
      expect(mockProps.currentQuizAmount).toBe(1);
   });
});
