import React from 'react';

const init_state = {
  deleted: '',
  my_users: []
}


const User_reducer = (state = init_state, action)=>{
  switch (action.type) {
    case 'ADD_USER': {
      return Object.assign({},state, {my_users:[...state.my_users,action.payload]})

  }
  case 'DELETE_USER': {
   const {my_users} = state;
   const false_state = my_users.filter(name => name.first !== action.payload);
   return Object.assign({}, state, {my_users: false_state})
  }
    default: return state;

  }
}
export default User_reducer;
