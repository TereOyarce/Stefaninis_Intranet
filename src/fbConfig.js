//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {initializeAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyC1DxtPpjcUGfN2-fVux5WAO8jB7K_49lE",
  authDomain: "stefanini-intranet.firebaseapp.com",
  projectId: "stefanini-intranet",
  storageBucket: "stefanini-intranet.appspot.com",
  messagingSenderId: "284259092918",
  appId: "1:284259092918:web:f9ccb7f90185e33f429917"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
/* const auth = initializeAuth(); */ 


