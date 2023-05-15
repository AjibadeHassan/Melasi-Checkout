import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyCM_THeoBrHw4r0SiwcSG1QPUi9B0A7ouE",
  authDomain: "melasi-stores.firebaseapp.com",
  projectId: "melasi-stores",
  storageBucket: "melasi-stores.appspot.com",
  messagingSenderId: "470818304092",
  appId: "1:470818304092:web:e3d5d95be488903a9b7699"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app); 