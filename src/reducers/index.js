import {combineReducers} from 'redux';
import User_reducer from './users_reducer';
export default combineReducers({
  Users: User_reducer
});
