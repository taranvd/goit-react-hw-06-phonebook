import { combineReducers } from 'redux';
import { filterReducer } from './filterSlice';
import { contactReducer } from './contactsSlice';

export const rootReducers = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
