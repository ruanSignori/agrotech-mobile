import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { getDatabase, get, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBLhxW5dRW0uKVpXSTyBDg1LWgsE5O00j0",
  authDomain: "potenciometro-c797e.firebaseapp.com",
  databaseURL: "https://potenciometro-c797e-default-rtdb.firebaseio.com",
  projectId: "potenciometro-c797e",
  storageBucket: "potenciometro-c797e.appspot.com",
  messagingSenderId: "833100699119",
  appId: "1:833100699119:web:fd61c79cdff42e68b5d21a",
};

initializeApp(firebaseConfig);

const auth = getAuth();
const database = getDatabase();

export {
  auth,
  database,
  get,
  ref,
  onValue,
  signInAnonymously,
  onAuthStateChanged,
};
