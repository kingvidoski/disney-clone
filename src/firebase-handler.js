import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDV4HpopJrFVN4YVDHuOfIQeaM9d9mPwMQ",
  authDomain: "kingsley-disneyplus-clone.firebaseapp.com",
  projectId: "kingsley-disneyplus-clone",
  storageBucket: "kingsley-disneyplus-clone.appspot.com",
  messagingSenderId: "947212652179",
  appId: "1:947212652179:web:8ab13ca715aadfce5cc766",
  measurementId: "G-R90LPVV43Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage }
export default db;
