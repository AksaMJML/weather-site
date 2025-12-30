const apiKey = "";
const apiUrl = "http://api.weatherapi.com/v1/current.json?key=525f5a8a471f491f91682348253012&q=galle"

async function checkWeather(){
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°C";
    document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
    document.querySelector(".wind").innerHTML = data.current.wind_kph + " kph";
}

checkWeather();







// fetch("http://api.weatherapi.com/v1/current.json?key=4b9108f8e2c5457ca3390217251211&q=panadura")
// .then(tes => removeEventListener.json())
// .then(data => {
//     console.log(data);

//     fetch(`https://restcountries.com/v3.1/name/${data.location.country}`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         document.getElementById("whether").innerText = data[0].name.common
//         document.getElementById("countryName").innerText = data[0].name.common
//         document.getElementById("flags").innerHTML = `<img src="${data[0].flags.png}" alt="">`
//     })
// })
// }