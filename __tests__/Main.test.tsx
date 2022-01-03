/**
 * @format
 */

import 'react-native';
import React from 'react';
import {fireEvent, render, RenderAPI} from '@testing-library/react-native';
import MainScreen from '../modules/QuizMain/Screen/MainScreen';
import MainStackScreenHeader from '../modules/QuizMain/Components/MainStackScreenHeader';
import {DisabledColor} from '../modules/utils/Styles';
import {MainStackScreenHeaderProps} from '../modules/QuizMain/types/componentType';
import {MockingNavigatorComponent, MockingProvier} from '../testUtil/testUtils';
import {navigationMocking} from '../mock';
import {MainStackScreenProps} from '../modules/QuizMain/types/quizMainStackNavigationTypes';

let MainRendered: RenderAPI;
let MainHeader: RenderAPI;
const mainHeaderProps: MainStackScreenHeaderProps = {
   navigation: navigationMocking,
   title: '퀴즈 고르기',
   difficulty: '쉬움',
   numberOfQuiz: 10,
   quizType: '객관식',
   category: '일반상식',
};
const headerProps: MainStackScreenProps = {
   navigation: navigationMocking,
   route: {
      key: '',
      name: 'SelectQuizOption',
   },
};
beforeEach(() => {
   MainRendered = render(
      <MockingNavigatorComponent
         Component={() => <MainScreen {...headerProps} />}
      />,
   );
   MainHeader = render(
      <MockingProvier
         Component={() => <MainStackScreenHeader {...mainHeaderProps} />}
      />,
   );
});
const testId: string[] = [
   'numberOfQuiz',
   'quizDifficulty',
   'quizType',
   'quizCategory',
];
describe('main component visible test', () => {
   for (let i = 0; i < testId.length; i++) {
      test(`select ${testId[i]} visible test`, () => {
         let getHasTestIdElement = MainRendered.getByTestId(testId[i]);
         fireEvent(getHasTestIdElement, 'onPress');
         expect(getHasTestIdElement.props.isExpanded).toBeFalsy();
      });
   }
   test('headerComponent recived props well?', () => {
      const getElementTitle = MainHeader.getByText(mainHeaderProps.title);
      expect(getElementTitle.props.children).toBe(mainHeaderProps.title);
      const getElementConfirm = MainHeader.getByText('퀴즈를 골라주세요!');
      expect(getElementConfirm.props.style.color).toBe(DisabledColor);
   });
});
