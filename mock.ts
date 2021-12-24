jest.mock('./__mocks__/@react-native-async-storage/async-storage');
jest.mock('react-native-simple-toast', () => ({
   SHORT: jest.fn(),
}));
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.useFakeTimers();
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
