const apiKey = "";
const apiUrl = "http://api.weatherapi.com/v1/current.json?key=525f5a8a471f491f91682348253012&q=kandy"

async function checkWeather(){
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
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