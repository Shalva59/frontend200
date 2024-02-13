import products from "./data.js"
import data from "./data.js"

console.log(data)

const productList = document.getElementById("productList");

console.log(productList);

data.map((products) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("col-4");



    card.innerHTML = `



    
${products.image.map((image)=>
    {
        return `<img src="${image.url}" class="card-img-top" alt="${image.alt}"> `
    })}

<img class="card-img"
src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png"
alt="Vans">
<div class="card-img-overlay d-flex justify-content-end">
<a href="#" class="card-link text-danger like">
    <i class="fas fa-heart"></i>
</a>
</div>
<div class="card-body">
<h4 class="card-title">${products.name}</h4>

${products.categories.map((category)=>
    {
        //return `<span class="badge text-bg-secondary">${category.categoryName}</span>`

        if(category.categoryId %2===0)
        {
            return `<span class="badge text-bg-secondary">${category.categoryName}</span>`
        }

        else
        {
            return ` < span class = "badge text-bg-primary" > $ {
        category.categoryName
    } < /span>`
}

})
}


<
p class = "card-text" >
    $ {
        products.details.description
    } < /p>

    <
    div class = "options d-flex flex-fill" >

    <
    tr class = "d-flex justify-content-between" >

    ${
        products.details.specs.map((spec) => {
            return `<td><i class="fas fa-microship"></i>${spec.specName}</td>
            <td>${spec.specValue}</td>`
        })
    }

    <td > < i class = "fas fa-microship" > < /i> ${products.details.specs[0].specName} </td >
    <
    td > $ {
        products.details.specs[0].specValue
    } < /td> <
    /tr>

    <
    /div> <
    div class = "buy d-flex justify-content-between align-items-center" >
    <
    div class = "price text-success" >
    <
    h5 class = "mt-4" > $$ {
        products.price
    } < /h5> <
    /div> <
    a href = "#"
class = "btn btn-danger mt-3" > < i class = "fas fa-shopping-cart" > < /i> Add to Cart</a >
    <
    /div> <
    /div>`



card.addEventListener("click", () => {
    console.log(products);
    // window.location.href = `description.html?id=${products.id}`;
    // localStorage.setItem("product" , JSON.stringify(products))
    window.location.href = `description.html?id=?${JSON.stringify(products)}`;
})


productList.appendChild(card);
})



const smartphone = {
    brand: "Samsung",
    model: "XYZ-1000",
    specifications: {
        display: {
            type: "AMOLED",
            size: "6.5 inches",
            resolution: "1080x2400 pixels",
        },
        camera: {
            main: "Quad",
            mainSpecs: ["64 MP", "12 MP", "8 MP", "2 MP"],
            selfie: "32 MP",
        },
        processor: "Octa-core",
        memory: {
            ram: "8 GB",
            storage: "128 GB",
        },
        battery: "5000 mAh",
    },
    images: {
        front: "front_image_url.jpg",
        back: "back_image_url.jpg",
    }
};