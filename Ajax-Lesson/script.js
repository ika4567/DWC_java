const API_KEY = "11a2718bf5cdf9c6b6baad56e8517a74"

$(function(){
  $('#btn').on('click', function() {
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      dataType : 'jsonp',
    })
  });
});