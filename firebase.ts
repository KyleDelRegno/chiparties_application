// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//extra tools
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebase = {
  apiKey: "AIzaSyAX7fiv2MtPtcSc4dYqacXxVhjFCgdp-Uw",
  authDomain: "chiparties-4905f.firebaseapp.com",
  projectId: "chiparties-4905f",
  storageBucket: "chiparties-4905f.firebasestorage.app",
  messagingSenderId: "228744914993",
  appId: "1:228744914993:web:c64a2635ab51fa63384d10",
  measurementId: "G-YZ507V87RR"
};

// Initialize Firebase as const
const firebaseApp = initializeApp(firebase);
const firebaseAnalytics = getAnalytics(firebaseApp);
const firebaseAuth = getAuth(firebaseApp);
const firebaseDB = getFirestore(firebaseApp);

export default firebaseApp;
