import firebase from 'firebase'
require('firebase/auth')

firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "i",
  messagingSenderId: "",
  appId: ""
});

const auth = firebase.auth();
const storage = firebase.storage();

export { storage, auth };
