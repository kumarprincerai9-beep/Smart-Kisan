function showInfo() {
    let crop = document.getElementById("crop").value;
    let result = document.getElementById("result");

    if(crop === "wheat") {
        result.innerHTML = "Wheat: Sowing - Nov, Fertilizer - Urea";
    }
    else if(crop === "rice") {
        result.innerHTML = "Rice: Sowing - June, Fertilizer - DAP";
    }
    else {
        result.innerHTML = "Sugarcane: Sowing - Feb, Fertilizer - Potash";
    }
} if(crop === "maize") {
    result.innerHTML = "Maize: Sowing - June, Fertilizer - Nitrogen";
}
else if(crop === "potato") {
    result.innerHTML = "Potato: Sowing - Oct, Fertilizer - Potash";
}
function showInfo() {
    let crop = document.getElementById("crop").value;
    let result = document.getElementById("result");

    if(crop === "wheat") {
        result.innerHTML = "🌾 गेहूं: बुवाई - नवंबर, खाद - यूरिया";
    }
    else if(crop === "rice") {
        result.innerHTML = "🌾 धान: बुवाई - जून, खाद - DAP";
    }
    else if(crop === "sugarcane") {
        result.innerHTML = "🌾 गन्ना: बुवाई - फरवरी, खाद - पोटाश";
    }
    else if(crop === "maize") {
        result.innerHTML = "🌾 मक्का: बुवाई - जून, खाद - नाइट्रोजन";
    }
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Dehradun&appid=14791e1ce82c2bc20bfd3f0b8c6ccc06&units=metric")
.then(res => res.json())
.then(data => {
  document.getElementById("weather").innerHTML =
    `Temp: ${data.main.temp}°C <br> Weather: ${data.weather[0].main}`;
});
    else {
        result.innerHTML = "🥔 आलू: बुवाई - अक्टूबर, खाद - पोटाश";
    }
}
function login() {
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;

  if (u === "farmer" && p === "1234") {
    document.getElementById("msg").innerText = "Login Successful ✅";
  } else {
    document.getElementById("msg").innerText = "Wrong Details ❌";
  }
}
// Weather (demo)
document.getElementById("weather").innerText =
  "Temp: 25°C | Sunny ☀";

// Login
function login() {
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;

  if (u === "farmer" && p === "1234") {
    document.getElementById("msg").innerText = "✅ Login Success";
  } else {
    document.getElementById("msg").innerText = "❌ Wrong Details";
  }
}
const apiKey= "1471e1ce82c2bc20fd3f0b8c6ccc06";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=Dehradun&appid=${apiKey}&units=metric`)
.then(response => response.json())
.then(data => {
  document.getElementById("weather").innerHTML =
    `🌡 Temp: ${data.main.temp}°C <br>
     ☁ Weather: ${data.weather[0].main}`;
});
const apikey =14791e1ce82c2bc20bfd3f0b8c6ccc06
import { initializeApp } from "firebase/app const firebaseConfig = {
  apiKey: "14791e1ce82c2bc20fd3f0b8c6cc06";
  authDomain: "Smart-kisan.firebaseapp.com",
  projectId: "Smart-kishan-3c2a0.firebaseapp.com
};

const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy-GTdxSgxnWMRQ-0BV8WqLHjHz82WXXE",
  authDomain: "smart-kisan-3c2a0.firebaseapp.com",
  projectId: "smart-kisan-3c2a0",
  storageBucket: "smart-kisan-3c2a0.firebasestorage.app",
  messagingSenderId: "311582271615",
  appId: "1:311582271615:web:baf886fbdc9317f076774a",
  measurementId: "G-66XMQMY8WX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { getAuth }from "firebase/auth";
const auth = getAuth();
import { createUserWithEmailAndPassword } from "firebase/auth";

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log("User created:", userCredential.user);
  })
  .catch((error) => {
    console.log(error.message);
  });
import { signInWithEmailAndPassword } from "firebase/auth";

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log("Login success:", userCredential.user);
  });
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

signInWithPopup(auth, provider)
  .then((result) => {
    console.log("Google login:", result.user);
  });
import { onAuthStateChanged } from "firebase/auth";

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User logged in:", user.uid);
  } else {
    console.log("User logged out");
  }
});
