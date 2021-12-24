import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import configureStroe from '../modules/utils/Redux/configureStore';

interface MockingProvier {
   Component: () => JSX.Element;
}

export const MockingProvier = ({Component}: MockingProvier) => {
   return (
      <Provider store={configureStroe}>
         <Component />
      </Provider>
   );
};
export const MockingNavigatorComponent = ({Component}: MockingProvier) => {
   return (
      <Provider store={configureStroe}>
         <NavigationContainer>
            <Component />
         </NavigationContainer>
      </Provider>
   );
};
test('', () => {});
