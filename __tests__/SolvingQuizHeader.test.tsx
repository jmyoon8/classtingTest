import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import SolvingQuizHeader from '../modules/QuizMain/Components/SolvingQuizHeader';
import {SolvingQuizStackScreenHeaderProps} from '../modules/QuizMain/types/componentType';
import {navigationMocking} from '../mock';

describe('SolvingQuizHeader render well', () => {
   const mockProps: SolvingQuizStackScreenHeaderProps = {
      navigation: navigationMocking,
      title: '퀴즈퀴즈!',
   };
   const renderHander = () => {
      return render(<SolvingQuizHeader {...mockProps} />);
   };
   test('SolvingQuizHeader render well', () => {
      const rendered = renderHander();
      const getTitle = rendered.getByText(mockProps.title);
      expect(getTitle.props.children).toBe(mockProps.title);
   });
   test('popToTop', () => {
      const rendered = renderHander();
      const getNavigationButton = rendered.getByTestId('popToTop');
      fireEvent(getNavigationButton, 'onPress');
   });
});
