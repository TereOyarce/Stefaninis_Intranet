//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import React, { useState, useEffect, useContext, createContext } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


export const firebaseConfig = initializeApp({
  apiKey: "AIzaSyC1DxtPpjcUGfN2-fVux5WAO8jB7K_49lE",
  authDomain: "stefanini-intranet.firebaseapp.com",
  projectId: "stefanini-intranet",
  storageBucket: "stefanini-intranet.appspot.com",
  messagingSenderId: "284259092918",
  appId: "1:284259092918:web:f9ccb7f90185e33f429917"
})

// Initialize Firebase


export const AuthContext = createContext();

export const AuthContextProvider = props => {
  const [user, setUser] = useState();
  const [error, setError] = useState();

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError)
    return () => unsubscribe()
  }, [])
  return <AuthContext.Provider value={{user, error}} {...props} />
}

export const useAuthState = () => {
  const auth = useContext(AuthContext)
  return {...auth, isAuthenticated: auth.user != null}
}

// Get a reference to the database service
export const db = getFirestore(firebaseConfig); 



