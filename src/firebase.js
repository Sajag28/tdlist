// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; // Add this line

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "authAIzaSyAiH_tTGC7bwkAByApoyCeAnHBMbJN3cG4",
  authDomain: "hostel-view.firebaseapp.com",
  projectId: "hostel-view",
  storageBucket: "hostel-view.appspot.com",
  messagingSenderId: "131083251567",
  appId: "1:131083251567:web:035e89a9b76c0e4f94429a",
  measurementId: "G-JC8DXZS8BP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, { // Add the database module here
  databaseURL: "https://hostel-view-default-rtdb.firebaseio.com/"
}); // Initialize the database module here
const db = getDatabase(app);
const analytics = getAnalytics(app);

// Export the db variable.
export { db };
