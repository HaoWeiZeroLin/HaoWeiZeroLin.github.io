// Import the functions you need from the SDKs you need
// import firebase from "firebase/app";
// import "firebase/database"; // Import the database module
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADmUzIfKwCitPgHkJNBBtAS0VdJw_wPNs",
  authDomain: "marketplace-z.firebaseapp.com",
  databaseURL: "https://marketplace-z-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "marketplace-z",
  storageBucket: "marketplace-z.appspot.com",
  messagingSenderId: "70736628947",
  appId: "1:70736628947:web:a6bc84da95492f90d61826",
  measurementId: "G-PPYCNDTVJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database };


// {
//   "rules": {
//     ".read": false,
//     ".write": false
//   }
// }