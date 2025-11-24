

function searchCountry(){
    let txtCountry = document.getElementById("txtCountry").value.trim();
    const url = `https://restcountries.com/v3.1/name/${txtCountry}`;

// fetch(url)
// .then(res => res.json())
// .then(data => {
//     document.getElementById("countryName").innerText = data[0].name.common
//     //document.getElementById("official").innerText = data[0].name.official
//     //document.getElementById("nativeName").innerText = data[0].name.nativeName
//     document.getElementById("flags").innerHTML = `<img src="${data[0].flags.png}" alt="">`
//     //console.log(data);
//     document.getElementById("tId1").innerText = data[0].tld[0]
//     document.getElementById("tId2").innerText = data[0].tld[1]
//     //document.getElementById("tId1").innerText = data[0].tld[2]
//     //document.getElementById("tId1").innerText = data[0].tld[3]
//    // document.getElementById("idd").innerText = data[0].idd.root
//    // document.getElementById("capital").innerText = data[0].capital
//    // document.getElementById("capital").innerText = data[0].capital
// })


fetch("http://api.weatherapi.com/v1/current.json?key=4b9108f8e2c5457ca3390217251211&q=panadura")
.then(tes => removeEventListener.json())
.then(data => {
    console.log(data);

    fetch(`https://restcountries.com/v3.1/name/${data.location.country}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.getElementById("whether").innerText = data[0].name.common
        document.getElementById("countryName").innerText = data[0].name.common
        document.getElementById("flags").innerHTML = `<img src="${data[0].flags.png}" alt="">`
    })
})
}