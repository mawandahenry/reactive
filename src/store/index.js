import React from 'react';
import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import { reactReduxFirebase } from 'react-redux-firebase';
import { reduxFirestore } from 'redux-firestore';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { initialState, RootReducer } from '../reducers/';

const firebaseConfig = {
    apiKey: "AIzaSyAVZ-EBgyTyg-PfpBwEKwJNtCeGjo3TVJM",
    authDomain: "contacts-manager-3b760.firebaseapp.com",
    databaseURL: "https://contacts-manager-3b760.firebaseio.com",
    projectId: "contacts-manager-3b760",
    storageBucket: "contacts-manager-3b760.appspot.com",
    messagingSenderId: "818490691347"
  };


const middleware = [thunk];
firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshots: true })

const enhancers = [
  reduxFirestore(firebase),
  reactReduxFirebase(firebase, {
    userProfile: 'users',
    useFirestoreForProfile: true,
  })
];
//const enhancers_2 = enhancers.push(thunk);

//window.devToolsExtension ? window.devToolsExtension() : f => f

// const initCounter = {};
//
// const store = createStore(RootReducer,
//   compose(
//       applyMiddleware(
//         thunk.withExtraArgument(enhancers) // Pass getFirebase function as extra argument
//       ),
//       window.devToolsExtension ? window.devToolsExtension() : f => f
//     )
// );
const reduxDevToolsExtension = window.devToolsExtension
if (process.env.NODE_ENV === "development" && typeof reduxDevToolsExtension === "function") {
  enhancers.push(reduxDevToolsExtension())
}
const composedEnhancers = compose(
  ...enhancers
)

const store = createStore(RootReducer, initialState, compose(
  applyMiddleware(...middleware),
  composedEnhancers
))
// const store = createStore(
//   RootReducer,
//   initialState,
//   compose(
//     applyMiddleware(
//       thunk.withExtraArgument(enhancers) // Pass getFirebase function as extra argument
//     ),
//     reactReduxFirebase(firebaseConfig, { userProfile: 'users', enableLogging: false })
//   )
// );

export default store;
