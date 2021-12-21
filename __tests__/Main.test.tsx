/**
 * @format
 */

import 'react-native';
import React from 'react';
import {
   fireEvent,
   render,
   RenderAPI,
} from '@testing-library/react-native';
import MainScreen from '../modules/QuizMain/Screen/MainScreen';
import MainStackScreenHeader from '../modules/QuizMain/Components/MainStackScreenHeader';
import {SubFontColor} from '../modules/utils/Colors';
import {MainStackScreenHeaderProps} from '../modules/QuizMain/types/componentType';

export const navigationMocking = {
   addListener: jest.fn(),
   canGoBack: jest.fn(),
   dispatch: jest.fn(),
   getParent: jest.fn(),
   getState: jest.fn(),
   goBack: jest.fn(),
   isFocused: jest.fn(),
   navigate: jest.fn(),
   pop: jest.fn(),
   popToTop: jest.fn(),
   push: jest.fn(),
   removeListener: jest.fn(),
   replace: jest.fn(),
   reset: jest.fn(),
   setOptions: jest.fn(),
   setParams: jest.fn(),
};

let MainRendered: RenderAPI | undefined;
let MainHeader: RenderAPI | undefined;
let mainHeaderProps: MainStackScreenHeaderProps = {
   navigation: navigationMocking,
   title: '문제 고르기',
   difficulty: '쉬움',
   numberOfQuiz: 10,
   quizType: '객관식',
   selectedCategory: '일반상식',
};
beforeEach(() => {
   MainRendered = render(
      <MainScreen
         navigation={navigationMocking}
         route={{
            key: '',
            name: 'SelectQuizOption',
         }}
      />,
   );
   MainHeader = render(
      <MainStackScreenHeader
         difficulty={mainHeaderProps.difficulty}
         numberOfQuiz={mainHeaderProps.numberOfQuiz}
         quizType={mainHeaderProps.quizType}
         selectedCategory={mainHeaderProps.selectedCategory}
         navigation={mainHeaderProps.navigation}
         title={mainHeaderProps.title}
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
         if (MainRendered) {
            let getHasTestIdElement = MainRendered.getByTestId(
               testId[i],
            );
            fireEvent(getHasTestIdElement, 'onPress');
            expect(getHasTestIdElement.props.isExpanded).toBeFalsy();
         }
      });
   }
   test('headerComponent recived props well?', () => {
      if (MainHeader) {
         const getElementTitle = MainHeader.getByText(
            mainHeaderProps.title,
         );
         expect(getElementTitle.props.children).toBe(
            mainHeaderProps.title,
         );
         const getElementConfirm = MainHeader.getByText('확인');
         expect(getElementConfirm.props.style.color).toBe(
            SubFontColor,
         );
      }
   });
});
