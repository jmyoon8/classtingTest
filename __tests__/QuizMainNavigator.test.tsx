import React from 'react';
import {render} from '@testing-library/react-native';

import QuizMainNavigator from '../modules/QuizMain/QuizMainNavigator';
import {MockingNavigatorComponent} from '../testUtil/testUtils';

test('render well?', () => {
   const rendered = render(
      <MockingNavigatorComponent Component={() => <QuizMainNavigator />} />,
   );
   expect(rendered).toBeTruthy();
});
