import React from 'react';
import renderer from 'react-test-renderer';
import SolvingQuizTimer from '../modules/QuizMain/Components/SolvingQuizTimer';
import moment from 'moment';
import {MockingNavigatorComponent} from './testUtils.test';

describe('SolvingQuizTimer render Test', () => {
   test('render well', () => {
      const rendered = renderer.create(
         <MockingNavigatorComponent
            Component={() => (
               <SolvingQuizTimer
                  isFinish={false}
                  startTime={moment().toString()}
               />
            )}
         />,
      );
   });
});
