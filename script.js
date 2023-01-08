// Setting up Global Variables
var apiRootUrl = 'https://api.openweathermap.org';

let weather = {
    apiKey: "a90173d6616c0e08afdfa728cac2e88b",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?" 
            + city
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => console.log(data));
    }

};