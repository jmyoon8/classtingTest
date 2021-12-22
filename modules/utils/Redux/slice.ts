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
   },

   reducers: {
      resetQuize: (state: ReduxDefaultProps, action: any) => {
         state.results = [];
      },
   },

   extraReducers: builder => {
      builder.addCase(getQuizThunk.pending, state => {
         state.apiState = 'pending';
      });
      builder.addCase(
         getQuizThunk.fulfilled,
         (state: ReduxDefaultProps, action) => {
            state.apiState = 'fulfilled';
            state.results = action.payload.data.results;
         },
      );
      builder.addCase(getQuizThunk.rejected, state => {
         state.apiState = 'rejected';
      });
   },
});
export const {resetQuize} = getArticleSlice.actions as any;
export default getArticleSlice.reducer;
