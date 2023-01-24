import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPnyq3FMvskgBi5qWQWV_HInszsciDBG4",
  authDomain: "pocketweb-c8ef7.firebaseapp.com",
  projectId: "pocketweb-c8ef7",
  storageBucket: "pocketweb-c8ef7.appspot.com",
  messagingSenderId: "614515893417",
  appId: "1:614515893417:web:8370a62afa0453f91435b8",
  measurementId: "G-EWJ6VR9Y2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()

export { app, auth };
