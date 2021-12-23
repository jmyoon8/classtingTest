import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import _ from 'lodash';
import {GetQuizParamProps} from '../../QuizMain/types/quizMainStackNavigationTypes';
import {MultipleQuizType} from '../../QuizMain/types/quizMainTypes';
import {instance} from '../axiosInstance';
import {ReduxDefaultProps} from './reduxType';

export const getQuizThunk = createAsyncThunk(
   'quiz/getQuiz',
   async ({amount, category, difficulty, type}: GetQuizParamProps) => {
      const {data} = await instance.get('', {
         params: {
            amount,
            category,
            difficulty,
            type,
         },
      });

      return {data};
   },
);

const getArticleSlice = createSlice<ReduxDefaultProps, any, any>({
   name: 'quiz',
   initialState: {
      apiState: '',
      results: [],
      shuffleQuiz: [],
      quizTimerState: {
         hour: '',
         minuts: '',
         seconds: '',
      },
   },

   reducers: {
      resetQuiz: (state: ReduxDefaultProps, action: any) => {
         state.results = [];
      },
     
      setQuizTimerState: (state: ReduxDefaultProps, action: any) => {
         state.quizTimerState.hour = action.payload.hour;
         state.quizTimerState.minuts = action.payload.minuts;
         state.quizTimerState.seconds = action.payload.seconds;
      },
   },

   extraReducers: builder => {
      builder.addCase(getQuizThunk.pending, state => {
         state.apiState = 'pending';
      });
      builder.addCase(
         getQuizThunk.fulfilled,
         (state: ReduxDefaultProps, action) => {
            const results = action.payload.data.results;
            state.apiState = '';
            state.results = results;
            if (action.meta.arg.type === 'multiple') {
               let cloneQuiz = _.cloneDeep(results) as MultipleQuizType[];
               for (let i = 0; i < cloneQuiz.length; i++) {
                  cloneQuiz[i].answers = cloneQuiz[i].incorrect_answers;
                  cloneQuiz[i].answers.push(cloneQuiz[i].correct_answer);
                  cloneQuiz[i].answers = _.shuffle(cloneQuiz[i].answers);
               }
               state.shuffleQuiz = cloneQuiz;
            }
         },
      );
      builder.addCase(getQuizThunk.rejected, state => {
         state.apiState = 'rejected';
      });
   },
});
export const {resetQuiz,  setQuizTimerState} =
   getArticleSlice.actions as any;
export default getArticleSlice.reducer;
