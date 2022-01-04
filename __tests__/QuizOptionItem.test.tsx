import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import QuizOptionItem from '../modules/QuizMain/Components/QuizOptionItem';
import {QuizOptionPoprs} from '../modules/QuizMain/types/componentType';

describe('QuizOptionItem render well?', () => {
   const mockProps: QuizOptionPoprs = {
      option: '',
      optionHandler: jest.fn(),
   };

   test('renderingTest', () => {
      const rendered = render(<QuizOptionItem {...mockProps} />);
      expect(rendered).toBeTruthy();
   });
   test('buttonPress Test', () => {
      const rendered = render(<QuizOptionItem {...mockProps} />);
      const getButton = rendered.getByTestId('button');
      fireEvent(getButton, 'onPress');
      expect(mockProps.optionHandler).toBeCalledTimes(1);
      expect(mockProps.optionHandler).toBeCalledWith(mockProps.option);
   });
});
