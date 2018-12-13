import React from 'react';

const init = {
  counter: 12
}

const CounterReducer = (state = init, action) => {
  switch (action.type) {
    case 'ADD_NUMBER':{
      return ({...state, counter: state.counter+=1});
    }
    case 'SUB_NUMBER': {
      return ({...state, counter: state.counter -=1});
    }

    default: return state;

  }
}

export default CounterReducer;
