import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import {GetQuizParamProps} from '../QuizMain/types/quizMainStackNavigationTypes';
import {QuizType} from '../QuizMain/types/quizMainTypes';
import {WrongAnswerNoteType} from './utilsTypes';

export const GET_WRONG_ANSWER_NOTE = 'wrongAnswerNote';

export const getWrongAnswerNote = async (): Promise<
   WrongAnswerNoteType[] | boolean
> => {
   try {
      const getItem: WrongAnswerNoteType[] = JSON.parse(
         (await AsyncStorage.getItem(GET_WRONG_ANSWER_NOTE)) as string,
      );

      return getItem;
   } catch (error) {
      return false;
   }
};
export const insertWrongAnswerNote = async (Item: WrongAnswerNoteType[]) => {
   try {
      await AsyncStorage.setItem(GET_WRONG_ANSWER_NOTE, JSON.stringify(Item));
      return true;
   } catch (error) {
      return false;
   }
};
export const insertQuizLog = async (
   selectAnswer: string[],
   getShuffleQuiz: QuizType[],
   quizId: string,
   selectedOption: GetQuizParamProps,
   result: {correct: number; inCorrect: number},
   getQuizTimer: {
      hour: string;
      minuts: string;
      seconds: string;
   },
   startTime: any,
) => {
   const getItem = await getWrongAnswerNote();

   if (typeof getItem !== 'boolean') {
      // 중복된 문제아이디를 저장불가
      if (!getItem.find(item => item.quizId === quizId)) {
         getItem.push({
            getQuizTimer,
            getShuffleQuiz,
            quizId,
            result,
            selectAnswer,
            selectedOption,
            solvedDate: moment().format('YYYY-MM-DD A hh:mm'),
            startTime,
         });
         await insertWrongAnswerNote(getItem);
         return true;
      }
   } else {
      return false;
   }
};
export const deleteQiuz = async (id: string) => {
   try {
      let getIteam = await getWrongAnswerNote();

      if (typeof getIteam !== 'boolean') {
         getIteam = getIteam.filter(item => item.quizId !== id);
         await insertWrongAnswerNote(getIteam);
         return true;
      }
      return false;
   } catch (error) {
      return false;
   }
};
