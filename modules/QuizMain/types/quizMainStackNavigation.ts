import {
   createStackNavigator,
   StackNavigationProp,
   StackScreenProps,
} from '@react-navigation/stack';

export type GetQuizParamProps = {
   category: number;
   amount: number;
   difficulty: string;
   type: string;
};
type QuizStackNavigationPramlist = {
   SelectQuizOption: undefined;
   GetQuizScreen: GetQuizParamProps;
};
export const QuizStackNavigation =
   createStackNavigator<QuizStackNavigationPramlist>();
export type MainStackScreenProps = StackScreenProps<
   QuizStackNavigationPramlist,
   'SelectQuizOption'
>;
export type MainStackScreenHeaderNavigationProps = StackNavigationProp<
   QuizStackNavigationPramlist,
   'SelectQuizOption'
>;
