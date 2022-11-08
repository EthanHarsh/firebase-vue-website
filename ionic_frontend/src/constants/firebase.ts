import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyCt8fn8P1cF7eBiInzRkKDtArPpBJl_BWo",

  authDomain: "main-340008.firebaseapp.com",

  databaseURL: "https://main-340008-default-rtdb.firebaseio.com",

  projectId: "main-340008",

  storageBucket: "main-340008.appspot.com",

  messagingSenderId: "750505130387",

  appId: "1:750505130387:web:caa026343a6b762f401066",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const functions = getFunctions(firebaseApp);

export { firebaseApp, functions };
