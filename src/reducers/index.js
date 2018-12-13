import {combineReducers} from 'redux';
import CounterReducer from './comm';
import Data from './data';
import User_reducer from './users_reducer';
export default combineReducers({
  posts: CounterReducer,
  info: Data,
  Users: User_reducer
});
