import React from 'react';
import {FETCH_FIREBASE_USERS} from '../actions/typos';

const in_fire_user = [];

const Fire_reducer = (state = in_fire_user, action) => {
  switch (action.type){
    case FETCH_FIREBASE_USERS: return state;
    default: return state;
    }
}
export default Fire_reducer;
