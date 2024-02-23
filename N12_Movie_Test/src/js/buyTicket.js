const formID = document.getElementById("form");
let sum = 0;

const payMoney = [{
        id: 1,
        price: 10
    },
    {
        id: 2,
        price: 20
    },
    {
        id: 3,
        price: 30
    },
    {
        id: 4,
        price: 40
    },
    {
        id: 5,
        price: 50
    },
    {
        id: 6,
        price: 60
    },
    {
        id: 7,
        price: 70
    },
    {
        id: 8,
        price: 80
    },
    {
        id: 9,
        price: 90
    },
    {
        id: 10,
        price: 100
    },
    {
        id: 11,
        price: 110
    },
    {
        id: 12,
        price: 120
    },

    {
        id: 13,
        price: 130
    },
    {
        id: 14,
        price: 140
    },

    {
        id: 15,
        price: 150
    },
    {
        id: 16,
        price: 160
    }

]



payMoney.map((element) => {
    const form = document.getElementById("form");
    const checkboxInnerHTML = `<input type="checkbox" id="accept" name="accept" value="${element.price}">
    <label>${element.id}</label>`

    const new_div = document.createElement("div");
    new_div.classList.add("checkboxDIV");


    new_div.innerHTML = checkboxInnerHTML;

    form.appendChild(new_div);

    let topclass = document.getElementById("top");

    new_div.addEventListener("click", (e) => {
        if (e.target.checked) {
            sum += element.price;
        } else {
            sum -= element.price;
        }
        console.log(sum);

        if(sum < 0)
        {
            sum = 0 ;

        }
        else
        {
            topclass.innerHTML = `${sum}`;
        }

    })

})