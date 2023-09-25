import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducers } from './reducers';

const persistConfig = {
  key: 'contact',
  storage,
  blacklist: ['filter'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducers);
