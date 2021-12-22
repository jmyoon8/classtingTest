import {
   createStackNavigator,
   StackNavigationProp,
   StackScreenProps,
} from '@react-navigation/stack';

export type GetQuizParamProps = {
   category: number | string;
   amount: number;
   difficulty: string;
   type: string;
};

export type SolvingQuizScreenPram = {
   apiOption: GetQuizParamProps;
   selectedOption: GetQuizParamProps;
};
type QuizStackNavigationPramlist = {
   SelectQuizOption: undefined;
   SolvingQuiz: SolvingQuizScreenPram;
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
export type QuizStackScreenProps = StackScreenProps<
   QuizStackNavigationPramlist,
   'SolvingQuiz'
>;
export type QuizStackScreenHeaderNavigationProps = StackNavigationProp<
   QuizStackNavigationPramlist,
   'SolvingQuiz'
>;
