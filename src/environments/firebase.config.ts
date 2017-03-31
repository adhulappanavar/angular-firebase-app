


import {AuthMethods, AuthProviders} from "angularfire2";
/*
export const firebaseConfig = {
    apiKey: "AIzaSyA0BcUcu4V8aHT_gM-32BhRcmqji4z-lts",
    authDomain: "final-project-recording.firebaseapp.com",
    databaseURL: "https://final-project-recording.firebaseio.com",
    storageBucket: "final-project-recording.appspot.com",
    messagingSenderId: "290354329688"
};
*/

export const firebaseConfig = {
    apiKey: "AIzaSyBTF5AupmBoZD0vtod15CgDxmN_DPOumLk",
    authDomain: "angularuniversity-8c415.firebaseapp.com",
    databaseURL: "https://angularuniversity-8c415.firebaseio.com",
    storageBucket: "angularuniversity-8c415.appspot.com",
    messagingSenderId: "986925522042"
  };


export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};