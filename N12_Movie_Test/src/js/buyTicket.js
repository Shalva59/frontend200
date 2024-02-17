const formID = document.getElementById("form");

let sum = 0;
const payMoney = 10;
for (let i = 1; i <= 10; i++) {
const createDiv = document.createElement("div");

    createDiv.innerHTML = `
    <div class="form-check">
    <input class="form-check-input" type="checkbox" value="${i*10}" id="flexCheckDefault">
    <label class="form-check-label" for="flexCheckDefault">A${i}</label>
    </div>
    `
    formID.appendChild(createDiv);
}

const btnShow = document.querySelector("btnShow");
const result = document.querySelector("top");

btnShow.addEventListener("click",()=>
{
    let checkbox = document.querySelector('input[type=checkbox]:checked');
    result.innerHTML= checkbox.value;
});