import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
getFirestore,
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
apiKey: "PASTE",
authDomain: "PASTE",
projectId: "PASTE",
storageBucket: "PASTE",
messagingSenderId: "PASTE",
appId: "PASTE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById("raceForm");

form.addEventListener("submit", async (e) => {

e.preventDefault();

const data = {

distance: document.getElementById("distance").value,

confidence: Number(document.getElementById("confidence").value),

anxiety: Number(document.getElementById("anxiety").value),

sleep: Number(document.getElementById("sleep").value),

satisfaction: Number(document.getElementById("satisfaction").value),

performance: document.getElementById("performance").value

};

await addDoc(collection(db,"runs"),data);

alert("Race submitted!");

form.reset();

});