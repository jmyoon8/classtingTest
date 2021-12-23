export interface ReduxDefaultProps {
   apiState: '' | 'pending' | 'rejected' | 'fulfilled';
   results: any[];
   shuffleQuiz: any[];
   quizTimerState: {
      hour: string;
      minuts: string;
      seconds: string;
   };
}
