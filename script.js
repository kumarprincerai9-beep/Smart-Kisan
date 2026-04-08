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
    else {
        result.innerHTML = "🥔 आलू: बुवाई - अक्टूबर, खाद - पोटाश";
    }
}
