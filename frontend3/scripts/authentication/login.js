// here are the firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

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
  const loginBtn = document.getElementById("login-btn");

  loginBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;


        setTimeout(() => {
          window.location.href = "dashboard.html";
        }, 1000);
      })
      .catch((error) => {
        let message;
        switch (error.code) {
          case "auth/user-not-found":
            message = "No user found with that email.";
            break;
          case "auth/wrong-password":
            message = "Incorrect password.";
            break;
          case "auth/invalid-email":
            message = "Please enter a valid email address.";
            break;
          default:
            message = "Error: " + error.message;
        }

        alert("Alert:" + message);
      });
  });
});
