var weatherAPIKey = "ab99ff04913e86fd6cfd4e2e7e3a1624"
var userInput = document.querySelector("#user-input")
var userSubmit = document.querySelector("#user-submit")
var cityTitleEl = document.querySelector(".cityTitle")
var tempEl = document.querySelector(".temp")
var windEl = document.querySelector(".wind")
var humidity = document.querySelector(".humidity")
var uvIndexEl = document.querySelector(".uvIndex")

userSubmit.addEventListener("click", function(event){
    event.preventDefault(); 
    var selectedCity = userInput.value;
    console.log(selectedCity)
    localStorage.setItem("City", selectedCity)

    var queryUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + selectedCity + "&appid=" + weatherAPIKey


fetch(queryUrl)
.then(function (response) {
    return response.json();
    })
    .then(function (data) {
    console.log(data);
    })


});

// var userInputValue = document.querySelector("#userInput").value
// console.log(userInputValue)
// var queryUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + userInputValue + "&appid=" + weatherAPIKey










// fetch(queryUrl)
// .then(function (response) {
//     return response.json();
//     })
//     .then(function (data) {
//     console.log(data);
//     });