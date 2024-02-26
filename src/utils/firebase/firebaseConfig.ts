// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { apiKey } from "../config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: apiKey.API_KEY,
  authDomain: "minimag-17be4.firebaseapp.com",
  projectId: "minimag-17be4",
  storageBucket: "minimag-17be4.appspot.com",
  messagingSenderId: "758279376686",
  appId: "1:758279376686:web:515da6cfc7958c32d6f4bf",
  measurementId: "G-CLLSRWV4CR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

logEvent(analytics, "notification received");
