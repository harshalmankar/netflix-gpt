// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOOZRf0ZWVg3qrCiU9QyT-vxZbGW2GfKg",
  authDomain: "netflixgpt-6bf61.firebaseapp.com",
  projectId: "netflixgpt-6bf61",
  storageBucket: "netflixgpt-6bf61.appspot.com",
  messagingSenderId: "1069083053370",
  appId: "1:1069083053370:web:65302aa2e338b87ce1d403",
  measurementId: "G-7Y7YD7FMX5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
