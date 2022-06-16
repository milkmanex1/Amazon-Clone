import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0sy-SgRXKAbjKi9_8yaiI5UPEDWsqthQ",
  authDomain: "clone-dfcc4.firebaseapp.com",
  projectId: "clone-dfcc4",
  storageBucket: "clone-dfcc4.appspot.com",
  messagingSenderId: "1011234004613",
  appId: "1:1011234004613:web:7d93a4462f0541afac13ec",
  measurementId: "G-KYLMX5ENEF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
