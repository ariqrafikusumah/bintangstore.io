// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from 'firebase/auth';
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYgBpUNZdESGiaCRUtCnBY-BT6J2rdI9I",
  authDomain: "bintangstore-40ae5.firebaseapp.com",
  projectId: "bintangstore-40ae5",
  storageBucket: "bintangstore-40ae5.appspot.com",
  messagingSenderId: "82918932821",
  appId: "1:82918932821:web:d764c6d8e7790a85196fdc",
  measurementId: "G-TX4N8EKLJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const auth = getAuth(app);
