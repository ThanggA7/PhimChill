const API_UPDATE = "https://ophim1.com/danh-sach/phim-moi-cap-nhat";

fetch(API_UPDATE)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    data.items.map(function (item) {
      console.log(item.name);
    });
  });
