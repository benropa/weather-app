// Setting up Global Variables
var apiRootUrl = 'https://api.openweathermap.org';

let weather = {
    apiKey: "ecbb3886f8fe3f8258d1cae670ce6cde",
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