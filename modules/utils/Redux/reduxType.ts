export interface ReduxDefaultProps {
   apiState: '' | 'pending' | 'rejected' | 'fulfilled';
   shuffleQuiz: any[];
   quizTimerState: {
      hour: string;
      minuts: string;
      seconds: string;
   };
}
