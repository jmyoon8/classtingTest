import {
   GetQuizParamProps,
   MainStackScreenHeaderNavigationProps,
   QuizStackScreenHeaderNavigationProps,
} from './quizMainStackNavigationTypes';
import {MultipleQuizType, QuizeType} from './quizMainTypes';

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

export interface QuizStartModalProps {
   setQuizStartModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
   quizStartModalVisible: boolean;
   selectedOption: GetQuizParamProps;
   setStartTime: React.Dispatch<React.SetStateAction<any>>;
   navigation: QuizStackScreenHeaderNavigationProps;
}
export interface SolvingQuizTopInfoProps {
   title: string;
   subTitle: string;
}
export interface SolvingQuizTimerProps {
   startTime: string;
   setTimerState: React.Dispatch<
      React.SetStateAction<{
         hour: string;
         minuts: string;
         seconds: string;
      }>
   >;
   timerState: {
      hour: string;
      minuts: string;
      seconds: string;
   };
}
export interface MultipleQuizAnswersProps {
   currentQuizInfo: MultipleQuizType;
   selectAnswerHandler: (selectedAnswer: any) => void;
   selectAnswer: any[];
   currentQuizAmount: number;
}
