import { combineReducers } from '@reduxjs/toolkit';
import storage from './_sync_storage';
import { persistReducer } from 'redux-persist';
import counterReducer, { counterSlice } from './counterSlice';
import likeReducer, { likeSlice } from './likeSlice';

const counterPersistConfig = {
  key: counterSlice.name,
  storage,
  whitelist: ['value'],
};

const likePersistConfig = {
  key: likeSlice.name,
  storage,
  whitelist: ['value'],
};

const rootReducer = combineReducers({
  counter: persistReducer(counterPersistConfig, counterReducer),
  like: persistReducer(likePersistConfig, likeReducer),
});

declare global {
  type RootState = ReturnType<typeof rootReducer>;
}

export default rootReducer;
