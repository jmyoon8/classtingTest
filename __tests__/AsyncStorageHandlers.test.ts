import {
   deleteQiuz,
   getWrongAnswerNote,
   GET_WRONG_ANSWER_NOTE,
   insertQuizLog,
   insertWrongAnswerNote,
} from '../modules/utils/AsyncStorageHandlers';
import {WrongAnswerNoteType} from '../modules/utils/utilsTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const mockWrongAnswerNoteItem: WrongAnswerNoteType = {
   getQuizTimer: {hour: '', minuts: '', seconds: ''},
   getShuffleQuiz: [],
   quizId: 'testId2',
   result: {
      correct: 0,
      inCorrect: 0,
   },
   selectAnswer: [],
   selectedOption: {
      amount: 0,
      category: '',
      difficulty: '',
      type: '',
   },
   solvedDate: moment().format('YYYY-MM-DD A hh:mm'),
   startTime: '',
};

describe('AsyncStorage CRUD TEST', () => {
   test('insert default Item Test', async () => {
      await insertWrongAnswerNote([]);
      expect(AsyncStorage.setItem).toBeCalledTimes(1);
      expect(AsyncStorage.setItem).toBeCalledWith(
         GET_WRONG_ANSWER_NOTE,
         JSON.stringify([]),
      );
      expect(AsyncStorage.setItem).toBeCalledTimes(1);
   });
   test('insert Item Test', async () => {
      const result = await insertQuizLog(
         mockWrongAnswerNoteItem.selectAnswer,
         mockWrongAnswerNoteItem.getShuffleQuiz,
         mockWrongAnswerNoteItem.quizId,
         mockWrongAnswerNoteItem.selectedOption,
         mockWrongAnswerNoteItem.result,
         mockWrongAnswerNoteItem.getQuizTimer,
         mockWrongAnswerNoteItem.startTime,
      );
      expect(result).toBeTruthy();
      expect(AsyncStorage.getItem).toBeCalledTimes(1);
      expect(AsyncStorage.getItem).toBeCalledWith(GET_WRONG_ANSWER_NOTE);

      expect(AsyncStorage.setItem).toBeCalledTimes(2);
      expect(AsyncStorage.setItem).toBeCalledWith(
         GET_WRONG_ANSWER_NOTE,
         JSON.stringify([mockWrongAnswerNoteItem]),
      );
   });
   test('getItem test', async () => {
      await getWrongAnswerNote();
      expect(AsyncStorage.getItem).toBeCalledTimes(2);
      expect(AsyncStorage.getItem).toBeCalledWith(GET_WRONG_ANSWER_NOTE);
   });
   test('deleteQuiz', async () => {
      const result = await deleteQiuz(mockWrongAnswerNoteItem.quizId);
      expect(result).toBeTruthy();
      const deletedArr = await getWrongAnswerNote();
      expect(deletedArr).toHaveLength(0);
   });
});
