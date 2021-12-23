import React from 'react';
import {fireEvent, render, RenderAPI} from '@testing-library/react-native';
import MainStackScreenHeader from '../modules/QuizMain/Components/MainStackScreenHeader';
import {MainStackScreenHeaderProps} from '../modules/QuizMain/types/componentType';
import {MockingProvier, navigationMocking} from './testUtils.test';

let renderMainStackScreenHeader: RenderAPI | undefined;

beforeEach(() => {
   const mockProps: MainStackScreenHeaderProps = {
      category: '',
      difficulty: '',
      navigation: navigationMocking,
      numberOfQuiz: 0,
      quizType: '',
      title: '',
   };
   renderMainStackScreenHeader = render(
      <MockingProvier
         Component={() => <MainStackScreenHeader {...mockProps} />}
      />,
   );
});
describe('MainStackScreenHeader Test', () => {
   test('PressConfirmButton', () => {
      if (renderMainStackScreenHeader) {
         expect(renderMainStackScreenHeader).toBeTruthy();
         const getButtonElement =
            renderMainStackScreenHeader.getByTestId('confirmButton');
         fireEvent(getButtonElement, 'onPress');
      }
   });
});
