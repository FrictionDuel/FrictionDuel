// Firebase v9 modular style
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { 
  getDatabase, ref, set, onValue, push, update, onDisconnect 
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

// ★ あなたの実プロジェクト設定 ★
const firebaseConfig = {
  apiKey: "AIzaSyDt86-ZNqSM830xevK22NadKEyxNUxKV0A",
  authDomain: "frictionduel.firebaseapp.com",
  databaseURL: "https://frictionduel-default-rtdb.firebaseio.com",
  projectId: "frictionduel",
  storageBucket: "frictionduel.firebasestorage.app",
  messagingSenderId: "208056777710",
  appId: "1:208056777710:web:0616eb2bcb55868612acff",
  measurementId: "G-RRPZBWF827"
};

// Firebase 初期化
const app = initializeApp(firebaseConfig);

// Realtime Database
const db = getDatabase(app);

// 外部で使用する関数をエクスポート
export { db, ref, set, onValue, push, update, onDisconnect };
