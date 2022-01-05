import React from 'react';
import {render} from '@testing-library/react-native';
import SolvingQuizScreen from '../modules/QuizMain/Screen/SolvingQuizScreen';
import {QuizStackScreenProps} from '../modules/QuizMain/types/quizMainStackNavigationTypes';
import {navigationMocking} from '../mock';
import {MockingNavigatorComponent} from '../testUtil/testUtils';

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
      const rendered = render(
         <MockingNavigatorComponent
            Component={() => <SolvingQuizScreen {...mockProps} />}
         />,
      );
      expect(rendered).toBeTruthy();
   });
   // 쓸모없는 테스트 제거
   // test('getFunction', () => {
   //    const rendered = render(
   //       <MockingNavigatorComponent
   //          Component={() => <SolvingQuizScreen {...mockProps} />}
   //       />,
   //    );
   //    expect(rendered).toBeTruthy();
   //    const getCheckButton = rendered.getByTestId('checkButton');
   //    fireEvent(getCheckButton, 'onPress');
   // });
});
