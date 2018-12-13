import React from 'react';

export const addNumber =() =>{
  return{
    type: 'ADD_NUMBER'
  }
}

export const subtractNumber =() =>{
  return{
    type: 'SUB_NUMBER'
  }
}

export const fetch_data = (work) => {
  return {
    type: 'ADD_USER',
    payload: work
  }
}
export const delete_user = (id) => {
  return {
    type: 'DELETE_USER',
    payload: id
  }
}
