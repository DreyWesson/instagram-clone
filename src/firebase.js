import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyjaZaPcHmb4n7PdTycIIxQSHqF8Pt-Nw",
  authDomain: "instagram-reels-88bbc.firebaseapp.com",
  databaseURL: "https://instagram-reels-88bbc.firebaseio.com",
  projectId: "instagram-reels-88bbc",
  storageBucket: "instagram-reels-88bbc.appspot.com",
  messagingSenderId: "207991219963",
  appId: "1:207991219963:web:a87ec888467495b6d3325e",
  measurementId: "G-W5KSNCYG54",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
