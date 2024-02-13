import data from "./../JS/data.js"


console.log(data);


const PRODUCT_ID = document.getElementById('productId');

const card = document.createElement("div");


data.map((element) => {

    card.classList.add("col-md-12");
    card.classList.add("flex");
    card.classList.add("flex-wrap");
    card.classList.add("gap-15");
    card.classList.add("justify-content-center");

    card.innerHTML += `
    <div class="card" style="width: 18rem;">
   
    <div class="imgContainer">
       <img src="${element.thumbnail}">
    </div>
   
 
    <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">${element.description}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${element.brand}</li>
        <li class="list-group-item">${element.category}</li>
        <li class="list-group-item">$${element.price}</li>
        <li class="list-group-item">${element.specs.map((specElement)=>
            {
                return `<span class="badge bg-primary">${specElement.specName}</span>`
            })}</li>
    </ul>
    <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
    </div>
</div>
    `

    PRODUCT_ID.appendChild(card)
})