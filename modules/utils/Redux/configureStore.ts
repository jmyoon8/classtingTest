import {configureStore} from '@reduxjs/toolkit';
import reducers from './reducers';

const configureStroe = configureStore({
   reducer: reducers,
});
export default configureStroe;
