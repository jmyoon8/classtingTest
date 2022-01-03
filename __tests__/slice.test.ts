import configureStroe from '../modules/utils/Redux/configureStore';
import {getQuizThunk, setQuizTimerState} from '../modules/utils/Redux/slice';

describe('slice test', () => {
   test('getQuizThunk api test', async () => {
      const quizAmount = 10;

      const getdata: any = await configureStroe.dispatch(
         getQuizThunk({
            amount: quizAmount,
            category: '9',
            difficulty: 'easy',
            type: 'boolean',
         }),
      );
      const dataLength = getdata.payload.data.results.length;
      expect(dataLength).toBe(quizAmount);
   });
   test('timer test', () => {
      const timerData = {hour: '10', minuts: '10', seconds: '10'};

      const dispatcher = configureStroe.dispatch;
      const getData = dispatcher(setQuizTimerState(timerData));

      expect(getData.payload).toEqual(timerData);
   });
});
