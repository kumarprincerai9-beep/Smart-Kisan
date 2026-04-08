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
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Dehradun&appid=YOUR_API_KEY&units=metric")
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
