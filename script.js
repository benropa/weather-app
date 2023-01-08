// Setting up Global Variables
var apiRootUrl = 'https://api.openweathermap.org';

let weather = {
    apiKey: "d91f911bcf2c0f925fb6535547a5ddc9",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => console.log(data));
    }

};