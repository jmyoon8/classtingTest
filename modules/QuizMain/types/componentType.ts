import {
   GetQuizParamProps,
   MainStackScreenHeaderNavigationProps,
   QuizStackScreenHeaderNavigationProps,
} from './quizMainStackNavigationTypes';

export interface MainStackScreenHeaderProps {
   navigation: MainStackScreenHeaderNavigationProps;
   title: string;
   category: string;
   difficulty: string;
   quizType: string;
   numberOfQuiz: number;
}
export interface AccordianContentProps {
   title: string;
   subTitle: string;
   Icon: any;
}
export interface SolvingQuizStackScreenHeaderProps {
   navigation: QuizStackScreenHeaderNavigationProps;
   title: string;
}

export interface QuizStartModalProps extends GetQuizParamProps {
   setQuizStartModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
   quizStartModalVisible: boolean;
   navigation: QuizStackScreenHeaderNavigationProps;
}
