import React from 'react';
import {fireEvent, render, RenderAPI} from '@testing-library/react-native';
import MainStackScreenHeader from '../modules/QuizMain/Components/MainStackScreenHeader';
import {MainStackScreenHeaderProps} from '../modules/QuizMain/types/componentType';
import {MockingProvier} from '../testUtil/testUtils';
import {navigationMocking} from '../mock';
import configureStroe from '../modules/utils/Redux/configureStore';
import {getQuizThunk} from '../modules/utils/Redux/slice';
import {Alert} from 'react-native';

// 뒤로갈수 있다는 가정하에 테스트
navigationMocking.canGoBack.mockReturnValue(true);
const mockProps: MainStackScreenHeaderProps = {
   category: '',
   difficulty: '',
   navigation: navigationMocking,
   numberOfQuiz: 0,
   quizType: '',
   title: '',
};
let renderMainStackScreenHeader: RenderAPI;

beforeEach(() => {
   renderMainStackScreenHeader = render(
      <MockingProvier
         Component={() => <MainStackScreenHeader {...mockProps} />}
      />,
   );
});
describe('MainStackScreenHeader Test', () => {
   test('PressConfirmButton not select quiz', async () => {
      const getButtonElement =
         renderMainStackScreenHeader.getByTestId('confirmButton');

      jest.spyOn(Alert, 'alert');
      fireEvent(getButtonElement, 'onPress');
      expect(Alert.alert).toBeCalledTimes(1);
      expect(Alert.alert).toBeCalledWith('옵션을 모두 선택해주세요!');
   });
   test('PressConfirmButton selected quiz', async () => {
      const getButtonElement =
         renderMainStackScreenHeader.getByTestId('confirmButton');

      const dispatcher = configureStroe.dispatch;
      await dispatcher(
         getQuizThunk({
            amount: 10,
            category: '9',
            difficulty: 'easy',
            type: 'boolean',
         }),
      );
      expect(renderMainStackScreenHeader).toBeTruthy();
      fireEvent(getButtonElement, 'onPress');
      expect(mockProps.navigation.navigate).toBeCalledTimes(1);
      expect(mockProps.navigation.navigate).toBeCalledWith('SolvingQuiz', {
         isWrongAnswerNotes: false,
         selectedOption: {amount: 0, category: '', difficulty: '', type: ''},
      });
   });
   test('goback button test', () => {
      const getGobackButton = renderMainStackScreenHeader.getByTestId('goBack');
      fireEvent(getGobackButton, 'onPress');
      expect(mockProps.navigation.goBack).toBeCalledTimes(1);
   });
});
