<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-storage-compat.js"></script>

<script>
const firebaseConfig = {
  apiKey: "AIzaSyD56Psy7pNVXKXphbSwgAJ6LkUb33yb2iQ",
  authDomain: "brother-fashion-house.firebaseapp.com",
  projectId: "brother-fashion-house",
  storageBucket: "brother-fashion-house.appspot.com",
  messagingSenderId: "30910144708",
  appId: "1:30910144708:web:4d277b3079432b85ae6991"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
</script>
