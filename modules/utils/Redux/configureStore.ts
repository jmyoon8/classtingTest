import {configureStore} from '@reduxjs/toolkit';
import combinReducers from './combinReducers';

const configureStroe = configureStore({
   reducer: combinReducers,
});

export default configureStroe;
