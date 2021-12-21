import {MainStackScreenHeaderNavigationProps} from './quizMainStackNavigation';

export interface MainStackScreenHeaderProps {
   navigation: MainStackScreenHeaderNavigationProps;
   title: string;
   selectedCategory: string;
   difficulty: string;
   quizType: string;
   numberOfQuiz: number;
}
