// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZpw4zom2BjK1X5SaSOUuQb7sX0_j2bj0",
  authDomain: "react-disney-plus-app-fc39e.firebaseapp.com",
  projectId: "react-disney-plus-app-fc39e",
  storageBucket: "react-disney-plus-app-fc39e.appspot.com",
  messagingSenderId: "515493315290",
  appId: "1:515493315290:web:4ebc8621b149d401151be3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
