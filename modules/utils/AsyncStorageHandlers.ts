import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import {GetQuizParamProps} from '../QuizMain/types/quizMainStackNavigationTypes';
import {QuizType} from '../QuizMain/types/quizMainTypes';
import {WrongAnswerNoteType} from './utilsTypes';

export const GET_WRONG_ANSWER_NOTE = 'wrongAnswerNote';

export const getWrongAnswerNote = async (): Promise<WrongAnswerNoteType[]> => {
   const getItem: WrongAnswerNoteType[] = JSON.parse(
      (await AsyncStorage.getItem(GET_WRONG_ANSWER_NOTE)) as string,
   );
   return getItem;
};
const insertWrongAnswerNote = async (Item: WrongAnswerNoteType[]) => {
   AsyncStorage.setItem(GET_WRONG_ANSWER_NOTE, JSON.stringify(Item));
};
export const insertQuizLog = async (
   selectAnswer: string[],
   getShuffleQuiz: QuizType[],
   quizId: string,
   selectedOption: GetQuizParamProps,
) => {
   const getItem = await getWrongAnswerNote();

   if (!getItem.find(item => item.quizId === quizId)) {
      getItem.push({
         selectAnswer,
         getShuffleQuiz,
         quizId,
         solvedDate: moment().format('YYYY-MM-DD A hh:mm'),
         selectedOption,
      });
      await insertWrongAnswerNote(getItem);
      return true;
   } else {
      return false;
   }
};
