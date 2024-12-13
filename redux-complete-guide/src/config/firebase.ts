// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcTzbPeEHfn53m05KYIyr5SHgdSGMDeIs",
  authDomain: "fir-demo-b3700.firebaseapp.com",
  projectId: "fir-demo-b3700",
  storageBucket: "fir-demo-b3700.firebasestorage.app",
  messagingSenderId: "1069684736040",
  appId: "1:1069684736040:web:7abf4c00d534477c30b51d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

//------------------------
// Run these commands in terminal to deploy when the app is ready.
// firebase login
// firebase init
// firebase deploy