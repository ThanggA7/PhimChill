const API = "https://phimapi.com/danh-sach/phim-moi-cap-nhat";
function Start() {
  GetData(function (data) {
    RenderBanner(data);
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

function RenderBanner(params) {
  var wrapper = document.querySelector(".wrapper");
  var banner = params.items.map(function (item) {
    return `

        <div class="banner" >
                    <div class="banner__info">
                <img
                src="${item.poster_url}"
                alt=""
                class="banner__poster"
              />      
              <p class="banner__info--title">${item.name}</p>

              <div class="banner__info--desc">
                <a href="${item.slug}" class="banner__info--act">Xem Ngay</a>
                <span class="banner__info--year">${item.year}</span>
              </div>
            </div>
       <img src="${item.thumb_url}" alt="" class="banner__film" />
       </div>
    `;
  });

  wrapper.innerHTML = banner.join("");
}
