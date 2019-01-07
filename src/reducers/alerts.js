import React from 'react';

const state_1 = {
  message :null,
  error :null

}

const Alert = (state = state_1, action)=>{
  switch (action.type) {
    case 'SUCCESS':{
      return{
        ...state,
        message: action.payload
      }
    }
    case 'RESET': {
      return {
        ...state,
        message: action.payload
      }
    }


    default: return state;

  }
}
export default Alert
