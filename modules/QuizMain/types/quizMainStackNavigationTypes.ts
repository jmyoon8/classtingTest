import {
   createStackNavigator,
   StackNavigationProp,
   StackScreenProps,
} from '@react-navigation/stack';
import {WrongAnswerNoteType} from '../../utils/utilsTypes';
import {QuizType} from './quizMainTypes';

export type GetQuizParamProps = {
   category: number | string;
   amount: number;
   difficulty: string;
   type: string;
};

export type SolvingQuizScreenPram = {
   selectedOption: GetQuizParamProps;
   isWrongAnswerNotes?: 'watchNow';
   wrongAnswerNoteInfo?: WrongAnswerNoteType;
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
