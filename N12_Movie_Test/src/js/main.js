const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1&quot";
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=';


const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const card = document.getElementsByClassName('card-img-overlay');


getMovies(API_URL);

function getMovies(url) {
    fetch(url)
        .then((res) => res.json())
        .then((res) => {
            // console.log(res.results);
            showMovies(res.results);
        });
}


const showMovies = (movies) => {
    main.innerHTML = "";

    console.log(movies)





    movies.map((movie) => {
        const createDiv = document.createElement("div");
        createDiv.classList.add("cardStyle");

        const {
            title,
            vote_average,
            poster_path,
            overview
        } = movie;

        createDiv.innerHTML =
            `
        <div class="col-md-4">
        <div class="card card-01 height-fix">
        <img class="" src="${IMG_PATH +  poster_path}" alt="${title}">
            <div class="card-img-overlay">
                <h3 class="card-title roboto-regular"><strong>${title}</strong></h3>
                 <p class="card-text roboto-regular">${overview}</p>
            </div>
        </div>
    </div>
        
        `

        createDiv.addEventListener("click", (e) => {
            localStorage.setItem("movie" , JSON.stringify(movie));
            window.location.href = `description.html`;
        });

        main.appendChild(createDiv);

    });

}



form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    console.log(searchTerm);


    if (searchTerm.length !== 0) {
        getMovies(SEARCH_API + searchTerm);
        search.value = "";

    } else {
        window.location.reload();
    }

})