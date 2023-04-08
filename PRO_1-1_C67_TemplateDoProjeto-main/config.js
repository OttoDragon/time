import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC3DfxTSWiv6Y08IN0E5f4cxfBrbwlvhMU",
  authDomain: "time-9ec8e.firebaseapp.com",
  databaseURL: "https://time-9ec8e-default-rtdb.firebaseio.com",
  projectId: "time-9ec8e",
  storageBucket: "time-9ec8e.appspot.com",
  messagingSenderId: "497994234232",
  appId: "1:497994234232:web:faea66d2511fcab9c6f08d"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();