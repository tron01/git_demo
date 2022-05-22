$(document).ready(function () {
  $("#w-form").submit(function (event) {
    searchweather(event);
  });
});
function searchweather(event) {
  var request;
  event.preventDefault();

  request = $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather",
    type: "GET",
    data: {
      q: $("#incity").val(),
      appid: "b755785b15bf2a7a4ab59d9a02b970f1",
      units: "metric",
    },
  });

  request.done(function (response) {
    outputData(response);
  });
  request.fail(function () {
    $("#city").text("Please try again, incorrect input!");
    $("#temp").text("ss");

    $("#cityw").text("ss");
  });
}

function outputData(jsonObject) {
  var city = jsonObject.name;
  var citytemp = jsonObject.weather[0].main;
  var temp = jsonObject.main.temp;

  $("#city").text(city);
  $("#cityw").text(citytemp);
  $("#temp").text(temp + "C");
}
