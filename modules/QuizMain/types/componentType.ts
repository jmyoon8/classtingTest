import {
   GetQuizParamProps,
   MainStackScreenHeaderNavigationProps,
   QuizStackScreenHeaderNavigationProps,
} from './quizMainStackNavigationTypes';
import {QuizType} from './quizMainTypes';

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
export interface QuizAnswersProps {
   currentQuizInfo: QuizType;
   selectAnswerHandler: (selectedAnswer: any) => void;
   selectAnswer: string[];
   currentQuizAmount: number;
}
export interface QuizCorrectMentProps {
   selectAnswer: string[];
   currentQuizAmount: number;
   currentQuizInfo: QuizType;
}
export interface QuizeExplorerProps {
   currentQuizAmount: number;
   quizExplorerHandler: (whereGoing: 'next' | 'prev') => void;
   selectAnswer: string[];
}
export interface QuizFinishModalProps {
   quizFinishModalVisible: boolean;
   setQuizFinishModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
   getShuffleQuiz: QuizType[];
   selectAnswer: string[];
   setSelectAnswer: React.Dispatch<React.SetStateAction<string[]>>;
   setCurrentQuizAmount: React.Dispatch<React.SetStateAction<number>>;
   setStartTime: React.Dispatch<any>;
   setIsFinish: React.Dispatch<React.SetStateAction<boolean>>;
   navigation: QuizStackScreenHeaderNavigationProps;
   selectedOption: GetQuizParamProps;
}
