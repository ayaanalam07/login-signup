import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAoyOVDB7YTKr4yJLMb1jBbcJI7BwFDBKc",
    authDomain: "social-app-808.firebaseapp.com",
    projectId: "social-app-808",
    storageBucket: "social-app-808.appspot.com",
    messagingSenderId: "1079921254041",
    appId: "1:1079921254041:web:888d539c58316f34cbe208",
    measurementId: "G-HVN7Z54MFN"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);