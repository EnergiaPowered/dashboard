import firebase from "firebase";
const firebaseConfig = {
  // Your Credentials
  apiKey: "AIzaSyDDZrEGrE7fc3rcONQ2HnxL1RWwrgpx7ds",
  authDomain: "energiaapp-3eaa3.firebaseapp.com",
  databaseURL: "https://energiaapp-3eaa3.firebaseio.com",
  projectId: "energiaapp-3eaa3",
  storageBucket: "energiaapp-3eaa3.appspot.com",
  messagingSenderId: "1068816673794",
  appId: "1:1068816673794:web:a7146829d96c870ae54b1b",
  measurementId: "G-8VX0SY1MVS"
};

firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export default storage;
