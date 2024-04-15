// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6rufsB9ZtFtVcSKsSrxT1agxzUo1MFTE",
  authDomain: "user-email-password-auth-41d84.firebaseapp.com",
  projectId: "user-email-password-auth-41d84",
  storageBucket: "user-email-password-auth-41d84.appspot.com",
  messagingSenderId: "959910100865",
  appId: "1:959910100865:web:45177d916e49f15fa3b280"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;