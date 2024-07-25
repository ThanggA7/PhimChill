const API = "https://phimapi.com/phim/cong-anh-ma-chay";
function Start() {
  GetData(function (data) {
    Renderinfo(data);
  });
}

Start();

function GetData(callback) {
  fetch(API)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function Renderinfo(params) {
  var actor = document.querySelector(".film__actor");
  var time = document.querySelector(".film__time");
  var desc = document.querySelector(".film__desc");
  var name = document.querySelector(".film__name");
  name.innerHTML = params.movie.name;
  actor.innerHTML = params.movie.actor;
  time.innerHTML = params.movie.time;
  desc.innerHTML = params.movie.content;
  params.episodes[0].server_data.map(function (item) {
    var chap = document.querySelector(".film__chap");
    chap.innerHTML = item.name;
  });
}
