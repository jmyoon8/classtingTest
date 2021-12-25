import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SolvingQuizScreen from '../modules/QuizMain/Screen/SolvingQuizScreen';
import {QuizStackScreenProps} from '../modules/QuizMain/types/quizMainStackNavigationTypes';
import {navigationMocking} from '../mock';
import {MockingNavigatorComponent, MockingProvier} from './testUtils.test';

const mockProps: QuizStackScreenProps = {
   navigation: navigationMocking,
   route: {
      key: '',
      name: 'SolvingQuiz',
      params: {
         isWrongAnswerNotes: false,
         selectedOption: {amount: 0, category: '', difficulty: '', type: ''},
      },
   },
};

describe('SolvingQuizScreen render well?', () => {
   test('rendering test', () => {
      render(
         <MockingNavigatorComponent
            Component={() => <SolvingQuizScreen {...mockProps} />}
         />,
      );
   });
   test('getFunction', () => {
      const rendered = render(
         <MockingNavigatorComponent
            Component={() => <SolvingQuizScreen {...mockProps} />}
         />,
      );
      const getCheckButton = rendered.getByTestId('checkButton');
      fireEvent(getCheckButton, 'onClick');
   });
});
