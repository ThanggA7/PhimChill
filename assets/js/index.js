const Category = {
  phimbo: "https://phimapi.com/v1/api/quoc-gia/han-quoc?limit=22",
  phimle: "https://phimapi.com/v1/api/quoc-gia/viet-nam?limit=22",
  hoathinh: "https://phimapi.com/v1/api/quoc-gia/hoat-hinh?limit=22",
  tvshows: "https://phimapi.com/v1/api/quoc-gia/tvshows?limit=22",
};
const Country = {
  vietnam: "https://phimapi.com/v1/api/quoc-gia/viet-nam?limit=22",
  hanquoc: "https://phimapi.com/v1/api/quoc-gia/han-quoc?limit=22",
  trungquoc: "https://phimapi.com/v1/api/quoc-gia/trung-quoc?limit=22",
  dailoan: "https://phimapi.com/v1/api/quoc-gia/dai-loan?limit=22",
  thaian: "https://phimapi.com/v1/api/quoc-gia/thai-lan?limit=22",
  hongkong: "https://phimapi.com/v1/api/quoc-gia/hong-kong?limit=22",
  phap: "https://phimapi.com/v1/api/quoc-gia/phap?limit=22",
  duc: "https://phimapi.com/v1/api/quoc-gia/duc?limit=22",
  halan: "https://phimapi.com/v1/api/quoc-gia/ha-lan?limit=22",
  mexico: "https://phimapi.com/v1/api/quoc-gia/mexico?limit=22",
  thuydien: "https://phimapi.com/v1/api/quoc-gia/thuy-dien?limit=22",
  philippines: "https://phimapi.com/v1/api/quoc-gia/philippines?limit=22",
  danmach: "https://phimapi.com/v1/api/quoc-gia/dan-mach?limit=22",
  thuysi: "https://phimapi.com/v1/api/quoc-gia/thuy-si?limit=22",
  ukraina: "https://phimapi.com/v1/api/quoc-gia/ukraina?limit=22",
  ireland: "https://phimapi.com/v1/api/quoc-gia/ireland?limit=22",
  nigeria: "https://phimapi.com/v1/api/quoc-gia/nigeria?limit=22",
  aunmy: "https://phimapi.com/v1/api/quoc-gia/au-my?limit=22",
  ando: "https://phimapi.com/v1/api/quoc-gia/an-do?limit=22",
  canada: "https://phimapi.com/v1/api/quoc-gia/canada?limit=22",
  taybannha: "https://phimapi.com/v1/api/quoc-gia/tay-ban-nha?limit=22",
  indonesia: "https://phimapi.com/v1/api/quoc-gia/indonesia?limit=22",
  balan: "https://phimapi.com/v1/api/quoc-gia/ba-lan?limit=22",
  malaysia: "https://phimapi.com/v1/api/quoc-gia/malaysia?limit=22",
  bodona: "https://phimapi.com/v1/api/quoc-gia/bo-dao-nha?limit=22",
  uae: "https://phimapi.com/v1/api/quoc-gia/uae?limit=22",
  chauphi: "https://phimapi.com/v1/api/quoc-gia/chau-phi?limit=22",
  arapxeut: "https://phimapi.com/v1/api/quoc-gia/a-rap-xe-ut?limit=22",
  colombia: "https://phimapi.com/v1/api/quoc-gia/colombia?limit=22",
  chile: "https://phimapi.com/v1/api/quoc-gia/chile?limit=22",
  argentina: "https://phimapi.com/v1/api/quoc-gia/argentina?limit=22",
  nhatban: "https://phimapi.com/v1/api/quoc-gia/nhat-ban?limit=22",
  anh: "https://phimapi.com/v1/api/quoc-gia/anh?limit=22",
  quocgiakhac: "https://phimapi.com/v1/api/quoc-gia/quoc-gia-khac?limit=22",
  thonhiky: "https://phimapi.com/v1/api/quoc-gia/tho-nhi-ky?limit=22",
  nga: "https://phimapi.com/v1/api/quoc-gia/nga?limit=22",
  uc: "https://phimapi.com/v1/api/quoc-gia/uc?limit=22",
  brazil: "https://phimapi.com/v1/api/quoc-gia/brazil?limit=22",
  y: "https://phimapi.com/v1/api/quoc-gia/y?limit=22",
  nauy: "https://phimapi.com/v1/api/quoc-gia/na-uy?limit=22",
  namphi: "https://phimapi.com/v1/api/quoc-gia/nam-phi?limit=22",
  bi: "https://phimapi.com/v1/api/quoc-gia/bi?limit=22",
  phanlan: "https://phimapi.com/v1/api/quoc-gia/phan-lan?limit=22",
  hylap: "https://phimapi.com/v1/api/quoc-gia/hy-lap?limit=22",
  singapore: "https://phimapi.com/v1/api/quoc-gia/singapore?limit=22",
};

function Start() {
  GetData(function (data) {
    // GetFilmDetail(data);
  });
  for (index in Country) {
    GetData(function (data) {
      var films = data.data.items;
      RenderFilmPoster(films);
    });
  }
}
Start();

function GetData(callback) {
  fetch(Country.vietnam)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

// function GetFilmDetail(page) {
//   var totalpage = page.data.params.pagination["totalPages"];
//   var listpage = document.querySelector(".list__page");
//   for (let i = 1; i <= totalpage; i++) {
//     var page__item = document.createElement("a");
//     page__item.classList.add("page__item");
//     page__item.innerHTML = i;
//     listpage.appendChild(page__item);
//     page__item.onclick = function () {
//       var API_PAGE = API_URL + i + "&limit=10";
//       fetch(API_PAGE)
//         .then(function (response) {
//           return response.json();
//         })
//         .then(function (list) {
//           RenderFilmPoster(list);
//         });
//     };
//   }
// }
function RenderFilmPoster(films) {
  var list__film = document.querySelectorAll(".card__film");
  var RenderFilm = films.map(function (item) {
    return `
   
         <a href="https://phimapi.com/phim/${item.slug}"> <img
            src="https://img.phimapi.com/${item.poster_url} "
            alt=""
            class="film__poster"
          />
         
            <div class="card__film--info">
              <p class="card__film--title">${item.name}</p>
            </div>
            <div class="card__film--desc">
              <p class="card__film--year">${item.year}</p>
              <p class="card__film--hd">${item.quality}</p>
              <p class="card__film--sub">${item.lang}</p>
              <p class="card__film--time">${item.time}</p>
              <p class="card__film--time">${item.episode_current}</p>
            </div>
 
    `;
  });

  for (let i = 0; i < list__film.length; i++) {
    list__film[i].innerHTML = RenderFilm[i];
  }
}
