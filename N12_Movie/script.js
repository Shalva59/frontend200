const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1&quot";
// const IMG_PATH = 'https://image.tmdb.org/t/p/w1280&#39';
// const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="&#39';
const main = document.getElementById("main");
const form = document.getElementById("search");
getmovies(API_URL);
 async function getmovies(url) {
    await fetch(url).then(res=> res.json()).then(data => data.results)
    // console.log(res);
    // console.log(data);
}
function showMovies(movies) {
     main.innerHTML = "";
    // movies.map((movie) => {
    //     const {
    //         title,
    //         poster_path,
    //         vote_average,
    //         overview
    //     } = movie;
    //     const movieEl =document.createElement("div");
    //     movieEl.classList.add("movie");
    //     movieEl.innerHTML=
    //     `
    //     <img src=${poster_path} alt${title}>
    //     <div class = "movie_info">
    //         <h3>${title}</h3>
    //         <span class="${vote_average}">${vote_average}</span>
    //     </div>
    //     <div class="overview">${overview}</div>
    //     `
    //     main.appendChild(movieEl);
    // })
    console.log(movies)
}

