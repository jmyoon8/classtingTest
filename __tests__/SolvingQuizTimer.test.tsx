import React from 'react';
import renderer from 'react-test-renderer';
import SolvingQuizTimer from '../modules/QuizMain/Components/SolvingQuizTimer';
import moment from 'moment';
import {MockingNavigatorComponent} from '../testUtil/testUtils';

describe('SolvingQuizTimer render Test', () => {
   // 타이머를 위한 fakeTimers
   // 흘러가는 시간은 테스트환경에 적합하지 않다 때문에 시간 경과를 제어할수있는 타이머로 교채해야한다.
   jest.useFakeTimers();

   test('render well', () => {
      renderer.create(
         <MockingNavigatorComponent
            Component={() => (
               <SolvingQuizTimer
                  isFinish={false}
                  startTime={moment().toString()}
               />
            )}
         />,
      );
      // 추가한 사항 타이머가 켜졌는지?
      expect(setInterval).toBeCalled();
      expect(setInterval).toBeCalledTimes(1);
      expect(setInterval).toBeCalledWith(expect.any(Function), 1000);
   });
});
