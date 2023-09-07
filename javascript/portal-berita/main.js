// Fetching data JSON
fetch("https://newsapi.org/v2/everything?apiKey=9bc8d9c7aa7044dd8f2f87ac86a0a7cd&q=google")
  .then((response) => response.json())
  .then((response) => {
    const news = response.articles;
    let cards = "";
    news.forEach((n) => (cards += showNews(n)));
    newsContainer.innerHTML = cards;
  });

// Search form
const loadingAnimation = document.querySelector(".loading-animation");
const newsContainer = document.querySelector(".news-container");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", function () {
  // Tampilkan animasi loading
  loadingAnimation.style.display = "block";

  const inputKeyword = document.querySelector(".input-keyword");
  fetch("https://newsapi.org/v2/everything?apiKey=9bc8d9c7aa7044dd8f2f87ac86a0a7cd&q=" + inputKeyword.value)
    .then((response) => response.json())
    .then((response) => {
      setTimeout(() => {
        const news = response.articles;
        let cards = "";
        news.forEach((n) => (cards += showNews(n)));
        loadingAnimation.style.display = "none";
        newsContainer.innerHTML = cards;
      }, 2000);
    });
});

function showNews(n) {
  const datePublished = dateFormat(n);
  return `<div class="col-lg-3 col-md-4">
  <a href="${n.url}">
    <div class="card mb-3">
      <img class="img-fluid" src="${n.urlToImage}" alt="Gambar Berita" />
      <div class="card-body">
        <h6 class="card-title fw-bold pb-3">${n.title}</h6>
        <small>${n.source.name} - ${datePublished}</small>
        <p class="text-description">${n.description} </p>      
      </div>
    </div>
  </a>
</div>`;
}

function dateFormat(n) {
  const apiDate = n.publishedAt;
  // Konversi tanggal ke objek Date
  const dateObject = new Date(apiDate);

  // Fungsi untuk menambahkan nol di depan angka < 10
  const addLeadingZero = (number) => {
    return number < 10 ? `0${number}` : number;
  };

  // Format tanggal dalam format "dd/mm/yy jam:menit"
  const formattedDate = `${addLeadingZero(dateObject.getDate())}/${addLeadingZero(dateObject.getMonth() + 1)}/${dateObject.getFullYear().toString().slice(-2)} ${addLeadingZero(dateObject.getHours())}:${addLeadingZero(
    dateObject.getMinutes()
  )}`;

  return formattedDate;
}
