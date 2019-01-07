import React from 'react';
import {ADD_USER, DELETE_USER, FETCH_USERS,GET_CONTACT,UPDATE_CONTACT} from './typos';
import axios from 'axios';

export const fetch_data = (work) => async dispatch => {
  const po = await axios.post('https://jsonplaceholder.typicode.com/users', work);
    dispatch ({
    type: ADD_USER,
    payload: po.data
  })
}
export const delete_user = (id) => async dispatch => {
  await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  dispatch ({
    type: DELETE_USER,
    payload: id
  })
}
export const fetch_just = () => async dispatch => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  dispatch({
    type: FETCH_USERS,
    payload: res.data
  })
}
export const get_contact = (id) => async dispatch => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  dispatch({
    type: GET_CONTACT,
    payload: res.data
  })
}
export const update_contact = (contact) => async dispatch => {
  const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${contact.idx}`);
  dispatch({
    type: UPDATE_CONTACT,
    payload: res.data
  })
}
export const success_mess =(message)=> {
  return {
    type : 'SUCCESS',
    payload: message
  }
}
export const reset_mess =()=> {
  return {
    type : 'RESET',
    payload: null
  }
}
