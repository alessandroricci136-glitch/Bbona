// Configurazione Firebase - condivisa da tutte le pagine
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCQ3QZK2uOLOAtgTDwybUrQV3Z_EDd2IYM",
  authDomain: "wood-pescara.firebaseapp.com",
  projectId: "wood-pescara",
  storageBucket: "wood-pescara.firebasestorage.app",
  messagingSenderId: "776695686883",
  appId: "1:776695686883:web:f1f920b5b5d8736fb007d6"
};

const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app);
export const auth = getAuth(app);
