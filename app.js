import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";


import {
getFirestore,
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";




const firebaseConfig = {
   apiKey: "AIzaSyA_g0rhhpI8dIXohYk6wOf86vwsA9M5y-Y",
   authDomain: "race-mind-research-c10a7.firebaseapp.com",
   projectId: "race-mind-research-c10a7",
   storageBucket: "race-mind-research-c10a7.firebasestorage.app",
   messagingSenderId: "79866981043",
   appId: "1:79866981043:web:964f181a5ecf0e97885ec6"
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
