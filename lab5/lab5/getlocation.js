
let x = document.getElementById("geolocation");

function getGeolocation() {
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showGeolocation);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showGeolocation(position) {
    const latitude = position.coords.latitude.toFixed(6);
    const longitude = position.coords.longitude.toFixed(6);
    x.innerHTML = `Latitude: ${latitude}<br>Longitude: ${longitude}`;
}