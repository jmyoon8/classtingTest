import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import configureStroe from '../modules/utils/Redux/configureStore';

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
