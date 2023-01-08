// Setting up Global Variables
const api = {
    key: "a90173d6616c0e08afdfa728cac2e88b",
    baseurl: "https://api.openweathermap.org/data/2.5/",
}

const search = document.querySelector('.search');
search.addEventListener('keypress', setQuery);

function setQuery(event) {
    if (event.keyCode == 13) {
        getResults(search.value);
        console.log(search.value);
    }
}

function getResults (query) {
    fetch(`${api.baseurl}weather?q=${query}&units=standard&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults (weather) {
    console.log(weather);
}