const formID = document.getElementById("form");
let sum = 0;
const payMoney = 
[
     {id:1,price:10},
     {id:2,price:20},
     {id:3,price:30},
     {id:4,price:40},
     {id:5,price:50},
     {id:6,price:60},
     {id:7,price:70},
     {id:8,price:80},
     {id:9,price:90},
     {id:10,price:100}
]



payMoney.map((element)=>
{
    const form = document.getElementById("form");
    const checkboxInnerHTML = `<input type="checkbox" id="accept" name="accept" value="${element.id}">
    <label>${element.price}</label>` 

    const new_div=document.createElement("div");
    new_div.classList.add("checkboxDIV");

    new_div.innerHTML = checkboxInnerHTML;

    form.appendChild(new_div);

})
