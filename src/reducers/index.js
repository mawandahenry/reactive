import {combineReducers} from 'redux';
import ContactReducer from './cons';

const rootReducer = combineReducers({
  contactList: ContactReducer
});

export default rootReducer;
