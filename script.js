// Setting up Global Variables
// API for search entry location's Weather NOW
var apikey = "a90173d6616c0e08afdfa728cac2e88b";
var apiurl = "https://api.openweathermap.org/data/2.5/";

// timezone plugins
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

// API for forecast that requires a citie's longitude and latitude
var apiforecast = `${apiurl}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apikey}`;

// Search button set up
const search = document.querySelector('.search');
search.addEventListener('keypress', setQuery);

// Using enter key to utilize search
function setQuery(event) {
    if (event.keyCode == 13) {
        getResults(search.value);
    }
}

// gathering data from initial api and displaying results
function getResults (query) {
    fetch(`${apiurl}weather?q=${query}&units=standard&APPID=${apikey}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

// saving results from api request in order to display content and make another api call


function displayResults (weather) {
    console.log(weather);
// display entered-in city    
    let city = document.querySelector('.city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
// display current temperature
    let temp = document.querySelector('.temp');
    temp.innerText = `${Math.round(weather.main.temp)}°F`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${weather.main.temp_min}°F / ${weather.main.temp_max}°F`;
}


