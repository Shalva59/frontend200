const sectionSlider = document.getElementById("sectionSlider");
const cardsContainerID = document.getElementById("cardsContainerID");
const fourCard = document.getElementById("fourCard");

async function getApi() {
    const response = await fetch("https://dummyjson.com/products");
    const changeJsonFile = await response.json();
    console.log(changeJsonFile);

    showOnlineShopping(changeJsonFile.products);
    //renderCard(changeJsonFile.products);
}

getApi();


function showOnlineShopping(params) {
    console.log(params);

    const newDivElement = document.createElement("div");

    newDivElement.innerHTML = `
    <div id="carouselExampleFade" class="carousel slide carousel-fade">
       <div class="containerDiv">
             <div class="carousel-inner">
                         <div class="carousel-item active">
                             <img src="${params[4].thumbnail}" class="d-block w-100" alt="...">
                         </div>
                         <div class="carousel-item">
                             <img src="${params[8].thumbnail}" class="d-block w-100" alt="...">
                         </div>
                         <div class="carousel-item">
                             <img src="${params[10].thumbnail}" class="d-block w-100" alt="...">
                         </div>
              </div>

             <div class="description">
                   <h1 class="roboto-regular">Shalva's Shop</h1>
                   <p class="roboto-thin">Online store where you can buy the item you want</p>
             </div>
        </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>
    `

    sectionSlider.appendChild(newDivElement);

}


function renderCard(product) {
    //cardsContainerID
    //fourCard

    const {
        thumbnail,
        title
    } = product;



    product.map((element) => {
        const getFourCard = document.createElement("div");
        getFourCard.classList.add("flex");
        getFourCard.classList.add("gap-20");

        getFourCard.innerHTML =
            `
         <div class="cardContainer ">
            <div class="CardIMgContainer">
                 <img src="${element.thumbnail}" alt="">
            </div>

            <div class="CardTitle">
                <h2>${element.title}</h2>
            </div>
        </div>

`
        fourCard.appendChild(getFourCard);


    });




}