// here are the firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// firebase confingurations taken from firebase
const firebaseConfig = {
  apiKey: "AIzaSyBgdGJxEuBLtkWbXukRFITZ0S6zg3mwtPY",
  authDomain: "taskflash-7a0d8.firebaseapp.com",
  projectId: "taskflash-7a0d8",
  storageBucket: "taskflash-7a0d8.appspot.com",
  messagingSenderId: "171838358479",
  appId: "1:171838358479:web:a35bf3e107569cc41988ba",
  measurementId: "G-ZWY6KGW3H5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

window.addEventListener("DOMContentLoaded", () => {
  const submit = document.getElementById("signup-btn");


  submit.addEventListener("click", (event) => {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;


        setTimeout(() => {
          window.location.href = "dashboard.html";
        }, 1000);
      })
      .catch((error) => {
        const errorCode = error.code;

        let message;
        switch (errorCode) {
          case "auth/email-already-in-use":
            message = "This email is already in use.";
            break;
          case "auth/invalid-email":
            message = "Please enter a valid email address.";
            break;
          case "auth/weak-password":
            message = "Password must be at least 6 characters.";
            break;
          default:
            message = "Error: " + error.message;
        }

        alert("Alert:" + message);
      });
  });
});