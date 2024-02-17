const testMovie = localStorage.getItem("movie"); // localStorage იდან წამოღებული სტრინგი 
const testMovieJsonFormat = JSON.parse(testMovie); // Json.parse სტრინგს გარდაქმნის JSON ფორმარტში სხვანაირად ობიექტში 
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
console.log(testMovieJsonFormat);


const mainCon = document.getElementById("mainContainer");

const renderCard = (movies) => {

    const createDiv = document.createElement("div");
    createDiv.classList.add("bigContainer");

    const {
        title,
        vote_average,
        poster_path,
        overview,
        release_date,
        vote_count
    } = movies;

    createDiv.innerHTML =
        `
         <div class="imgContainer">
             <img src="${IMG_PATH + poster_path}" alt="">
         </div>

        <div class="generalContainer">
            <div class="descriptionContainer">
                <h1>${title}</h1>
                <p>${overview}</p>

                <ul>
                    <li>Rate : ${vote_average.toFixed(1)}</li>
                    <li>release_date : ${release_date} </li>
                    <li>Vote Count : ${vote_count}</li>
                </ul>

            </div>

            <div class="buttonContainer">
                <button type="button" id="btn" class="btn btn-warning">Buy ticket</button>
            </div>
        </div>

       `
       const btnID = document.getElementById("btn");

       // ანუ აქ არის რაღაც პრობლემა button -ზე რომ ვაბამ addEventListener წერს რაღაც ერრორს და დივზე მუშაობს ჩვეულებრივ ვერ გავიგე რატომ 
       createDiv.addEventListener("click", (e) => {
        window.location.href = `buyTicket.html`;
    });


    mainCon.appendChild(createDiv);

}

renderCard(testMovieJsonFormat);