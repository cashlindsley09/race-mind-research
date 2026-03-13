import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
getFirestore,
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const firebaseConfig = {
apiKey: "YOUR KEY",
authDomain: "YOUR DOMAIN",
projectId: "YOUR PROJECT",
storageBucket: "YOUR BUCKET",
messagingSenderId: "YOUR ID",
appId: "YOUR APPID"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


console.log("JavaScript Loaded");


const form = document.getElementById("raceForm");


form.addEventListener("submit", async (e) => {

e.preventDefault();

alert("Submit button clicked");

const data = {

distance: document.getElementById("distance").value,
confidence: Number(document.getElementById("confidence").value),
anxiety: Number(document.getElementById("anxiety").value),
sleep: Number(document.getElementById("sleep").value),
satisfaction: Number(document.getElementById("satisfaction").value),
performance: document.getElementById("performance").value

};

try{

await addDoc(collection(db,"runs"),data);

alert("Entry submitted!");

form.reset();

}catch(error){

console.error(error);
alert("Error submitting");

}

});