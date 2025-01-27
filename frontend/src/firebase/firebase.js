// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDVyRaSkkxp4IAbNLR2oVz_aY3yR5N3uo",
  authDomain: "rideshare-438d1.firebaseapp.com",
  projectId: "rideshare-438d1",
  storageBucket: "rideshare-438d1.firebasestorage.app",
  messagingSenderId: "485905762524",
  appId: "1:485905762524:web:ccc64b5d5dc87e9e784c19",
  measurementId: "G-JF0R2XM4V1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth,app };
//const analytics = getAnalytics(app);
