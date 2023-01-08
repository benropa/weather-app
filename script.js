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
    }
}

function getResults (query) {
    fetch(`${api.baseurl}weather?q=${query}&units=standard&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults (weather) {
// display entered-in city    
    let city = document.querySelector('.city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
// display current temperature
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°F</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${weather.main.temp_min}°F / ${weather.main.temp_max}°F`;
}

