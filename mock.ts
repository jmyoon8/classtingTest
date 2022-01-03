// asyncStorage 모킹
jest.mock('./__mocks__/@react-native-async-storage/async-storage');

// 토스트 모킹
jest.mock('react-native-simple-toast', () => ({
   SHORT: jest.fn(),
}));
// 네비게이션 전용 mock
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// 네비게이션props모킹
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
