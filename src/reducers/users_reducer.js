import React from 'react';

const init_state = {
  deleted: '',
  my_users: [
    {id: 1,name: 'mawanda henry',email: 'mawanda@gmail.com',phone: '0777-777-212' },
      {id: 2,name: 'Tebandeke Denis',email: 'deno19@gmail.com',phone: '0772-077-212' },
        {id: 1,name: 'Sseninde Jessy',email: 'wajessy@gmail.com',phone: '0782-47-212' },
          {id: 1,name: 'Ssebanenya John ',email: 'Ssebs@gmail.com',phone: '0717-707-912' }

  ]
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
