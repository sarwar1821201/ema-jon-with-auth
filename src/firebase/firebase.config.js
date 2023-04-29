// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1tVIoxsfPGZOHbB1xeRtFsppbGxH6mM4",
  authDomain: "ema-jon-with-firebase-au-2cd35.firebaseapp.com",
  projectId: "ema-jon-with-firebase-au-2cd35",
  storageBucket: "ema-jon-with-firebase-au-2cd35.appspot.com",
  messagingSenderId: "340518842909",
  appId: "1:340518842909:web:014deed172bca4c8e08cf4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;