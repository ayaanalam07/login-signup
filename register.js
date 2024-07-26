import {createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

import {auth} from "./config.js"


const form = document.querySelector("#form")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const firstName = document.querySelector("#firstName")
const lastName = document.querySelector("#lastName")
const signInWithGoogleButton = document.querySelector("#signInWithGoogle");


const signInWithGoogle = ()=>{
    const googleProvider= new firebase.auth.GoogleAuthProvider

    auth.signInWithPopup(googleProvider)
    .then(()=>{
        window.location.assign = ('./home.html')
    })
    .catch((error)=>{
     alert(error);
    })
}






signInWithGoogleButton.addEventListener("click" , signInWithGoogle)



form.addEventListener("submit" , (event)=>{
   event.preventDefault();

   createUserWithEmailAndPassword(auth, email.value, password.value, firstName.value, lastName.value)
   .then((userCredential) => {
     const user = userCredential.user;
     email.value="";
     password.value="";
     firstName.value="";
     lastName.value="";
console.log(user)  
 })
   .catch((error) => {
     const errorMessage = error.message;
console.log(errorMessage);   
});

})