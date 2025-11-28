// Firebase v9 modular style
// 注意: このファイルは module を使って import します
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, ref, set, onValue, push, update, onDisconnect } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";


const firebaseConfig = {// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt86-ZNqSM830xevK22NadKEyxNUxKV0A",
  authDomain: "frictionduel.firebaseapp.com",
  projectId: "frictionduel",
  storageBucket: "frictionduel.firebasestorage.app",
  messagingSenderId: "208056777710",
  appId: "1:208056777710:web:0616eb2bcb55868612acff",
  measurementId: "G-RRPZBWF827"
};
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_AUTHDOMAIN",
databaseURL: "https://YOUR_DB.firebaseio.com",
projectId: "YOUR_PROJECTID",
storageBucket: "YOUR_BUCKET",
messagingSenderId: "SENDER_ID",
appId: "APP_ID"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


export { db, ref, set, onValue, push, update, onDisconnect };
