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
   isFinish: boolean;
}
export interface MultipleQuizAnswersProps {
   currentQuizInfo: MultipleQuizType;
   selectAnswerHandler: (selectedAnswer: any) => void;
   selectAnswer: string[];
   currentQuizAmount: number;
}
export interface QuizCorrectMentProps {
   selectAnswer: string[];
   currentQuizAmount: number;
   currentQuizInfo: QuizeType;
}
export interface QuizeExplorerProps {
   currentQuizAmount: number;
   quizExplorerHandler: (whereGoing: 'next' | 'prev') => void;
   selectAnswer: string[];
}
export interface QuizFinishModalProps {
   quizFinishModalVisible: boolean;
   setQuizFinishModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
   getShuffleQuiz: QuizeType[];
   selectAnswer: string[];
}
