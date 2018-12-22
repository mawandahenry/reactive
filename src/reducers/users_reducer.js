import {ADD_USER, DELETE_USER,FETCH_USERS,GET_CONTACT,UPDATE_CONTACT} from '../actions/typos';
import React from 'react';


const initials = {
  my_users:[
    {id: 1, name: "mawanda Henry", phone: "077-666-999", email: "mawanda111@gmail.com"},
      {id: 2, name: "wasswa Hezron", phone: "075-066-949", email: "hezronoal@gmail.com"}
  ],
  editor: {}
}

const User_reducer = (state = initials, action) => {
  switch (action.type) {
    case ADD_USER:{
    return {
      ...state,
       my_users: [action.payload, ...state.my_users]
    }
  }
  case FETCH_USERS:{
  return {
    ...state,
     my_users: action.payload
  }
}
case UPDATE_CONTACT:{
return {
  ...state,
   my_users: state.my_users.map(user => user.id === action.payload.id? (user = action.payload): user)
}
}
case GET_CONTACT:{
return {
  ...state,
  editor: action.payload
}
}
    case DELETE_USER:return {
      ...state, my_users: state.my_users.filter(user => user.id !== action.payload)
  }
    default:

    return state;

  }
}

export default User_reducer;
