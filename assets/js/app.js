const API = "https://phimapi.com/phim/cong-anh-ma-chay";
const videoPlayer = document.getElementById("videoPlayer");

function Start() {
  GetData(function (data) {
    data.episodes[0].server_data.map(function (item) {
      playEpisode(item.link_m3u8);
    });

    Renderinfo(data);
  });

  RenderChap();
}

Start();

function GetData(callback) {
  fetch(API)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function RenderChap() {
  const chap = document.querySelector("#list");
  GetData(function (data) {
    var html = data.episodes[0].server_data.map(function (item) {
      var chap = item.name.split("Tập")[1];
      return `
      <li>
     <a href="#" onclick="playEpisode('${item.link_m3u8}')">${chap}</a>
      </li>
    `;
    });

    chap.innerHTML = html.join("");
  });
}

function playEpisode(url) {
  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(videoPlayer);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      videoPlayer.play();
    });
  } else if (videoPlayer.canPlayType("application/vnd.apple.mpegurl")) {
    videoPlayer.src = url;
    videoPlayer.addEventListener("loadedmetadata", function () {
      videoPlayer.play();
    });
  } else {
    alert("Trình duyệt của bạn không hỗ trợ phát video HLS.");
  }
}

function Renderinfo(params) {
  var actor = document.querySelector(".film__actor");
  var time = document.querySelector(".film__time");
  var desc = document.querySelector(".film__desc");
  var name = document.querySelector(".film__name");
  var chap = document.querySelector(".chap__desc");
  name.innerHTML = params.movie.name;
  actor.innerHTML = params.movie.actor;
  time.innerHTML = params.movie.time;
  desc.innerHTML = params.movie.content;
  chap.innerHTML = params.episodes[0].server_data.length;
  console.log(params.episodes[0].server_data.length);
}
