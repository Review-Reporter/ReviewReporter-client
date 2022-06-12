import { combineReducers } from 'redux';
import data from './data';
import page from './page';

const rootReducer = combineReducers({
  data,
  page
});

export default rootReducer;