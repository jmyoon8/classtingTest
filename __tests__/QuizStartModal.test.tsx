import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import QuizStartModal from '../modules/QuizMain/Components/QuizStartModal';
import {QuizStartModalProps} from '../modules/QuizMain/types/componentType';

import moment from 'moment';
import {navigationMocking} from '../mock';

let QuizStartModalVisible = true;
let startTime = '';
const mockProps: QuizStartModalProps = {
   navigation: navigationMocking,
   quizStartModalVisible: true,
   selectedOption: {
      amount: 10,
      category: '',
      difficulty: '',
      type: '',
   },
   setQuizStartModalVisible: () => {
      return (QuizStartModalVisible = false);
   },
   setStartTime: () => {
      startTime = moment().toString();
   },
   setIsFinish: () => {},
};

const renderedHandler = () => {
   return render(<QuizStartModal {...mockProps} />);
};

describe('component render well', () => {
   test('render well', () => {
      const rendered = renderedHandler();
   });
   test('when onBackButtonPress close Button is worked', () => {
      const renderd = renderedHandler();
      const getCloseButton = renderd.getByTestId('closeButton');
      fireEvent(getCloseButton, 'onBackButtonPress');
      expect(QuizStartModalVisible).toBeFalsy();
   });
   test('when onPress checkHandler to set startTime', () => {
      const renderd = renderedHandler();
      const getCloseButton = renderd.getByTestId('checkButton');
      fireEvent(getCloseButton, 'onPress');
      expect(startTime).toBeTruthy();
   });
});
