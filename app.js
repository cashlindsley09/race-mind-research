import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
getFirestore,
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyCG3BJihg9spqBIx27G7Uadp11af0mGgao",
    authDomain: "race-mind-research.firebaseapp.com",
    projectId: "race-mind-research",
    storageBucket: "race-mind-research.firebasestorage.app",
    messagingSenderId: "302345130110",
    appId: "1:302345130110:web:8c21f3ba39da0227e0c82f"
  };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const form = document.getElementById("raceForm");

form.addEventListener("submit", async (e)=>{

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

document.getElementById("successMessage").style.display="block";

form.reset();

setTimeout(()=>{
document.getElementById("successMessage").style.display="none";
},3000);

});