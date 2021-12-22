import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {GetQuizParamProps} from '../../QuizMain/types/quizMainStackNavigationTypes';
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
   },

   reducers: {
      resetQuiz: (state: ReduxDefaultProps, action: any) => {
         state.results = [];
      },
      setShuffleQuiz: (state: ReduxDefaultProps, action: any) => {
         state.shuffleQuiz = action.payload;
      },
   },

   extraReducers: builder => {
      builder.addCase(getQuizThunk.pending, state => {
         state.apiState = 'pending';
      });
      builder.addCase(
         getQuizThunk.fulfilled,
         (state: ReduxDefaultProps, action) => {
            state.apiState = '';
            state.results = action.payload.data.results;
         },
      );
      builder.addCase(getQuizThunk.rejected, state => {
         state.apiState = 'rejected';
      });
   },
});
export const {resetQuiz, setShuffleQuiz} = getArticleSlice.actions as any;
export default getArticleSlice.reducer;
