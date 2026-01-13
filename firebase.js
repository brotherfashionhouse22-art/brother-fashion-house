// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyD56Psy7pNVXXKXphb3bAL6kUb33vb2iK",
  authDomain: "brother-fashion-house.firebaseapp.com",
  projectId: "brother-fashion-house",
  storageBucket: "brother-fashion-house.appspot.com",
  messagingSenderId: "30910144708",
  appId: "1:30910144708:web:4d277b3079432b85ae6991"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firestore
const db = firebase.firestore();
