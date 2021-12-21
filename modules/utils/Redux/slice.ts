import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {GetQuizParamProps} from '../../QuizMain/types/quizMainStackNavigation';
import {instance} from '../axiosInstance';
import {reduxDefaultProps} from './reduxType';

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

const getArticleSlice = createSlice<reduxDefaultProps, any, any>({
   name: 'quiz',
   initialState: {
      apiState: '',
      results: [],
   },

   reducers: {
      setWebViewUrl: (state: reduxDefaultProps, action: any) => {
         return {...state, webViewUrl: action.payload};
      },
      setSearchOption: (state: reduxDefaultProps, action: any) => {
         return {...state, searchOption: action.payload};
      },
   },

   extraReducers: builder => {
      builder.addCase(getQuizThunk.pending, state => {
         state.apiState = 'pending';
      });
      builder.addCase(
         getQuizThunk.fulfilled,
         (state: reduxDefaultProps, action) => {
            state.apiState = 'fulfilled';
            state.results = action.payload.data.results;
         },
      );
      builder.addCase(getQuizThunk.rejected, state => {
         state.apiState = 'rejected';
      });
   },
});
export const {setWebViewUrl, setSearchOption} = getArticleSlice.actions as any;
export default getArticleSlice.reducer;
