import {combineReducers} from 'redux';
import User_reducer from './users_reducer';
import { firebaseReducer } from 'react-redux-firebase';
import Fire_reducer from './firebase_users';
import { firestoreReducer } from 'redux-firestore';
import {reducer as reduxForm} from 'redux-form';
import  Alert from './alerts';

export const initialState = {}
export const RootReducer = combineReducers({
  Users: User_reducer,
  firebase: firebaseReducer,
  fire_users: Fire_reducer,
  firestore: firestoreReducer,
  form:reduxForm,
  Alert
});
