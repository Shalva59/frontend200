console.log("hello");


var x = 5;
var z = ++x;

console.log(x);
console.log(z);


var a = 5;
var b = a++;

console.log(a);
console.log(b);


var strSum = prompt("შეიყვანეთ ანაბრის თანხა", 1000)

var strPercent = prompt("შეიყვანეთ საპროცენტო განაკვეთი", 10)

var finalAmount = parseInt(strSum)

var finalPercent = parseInt(strPercent)

finalAmount = finalAmount + finalAmount * finalPercent / 100

alert("პროცენტის დარიცხვის შემდეგ ჩვენი თანხა იქნება" + finalAmount)

if (finalAmount > 4000) {
    alert("გერიცხება კარგად");
} else if (finalAmount > 2000 && finalAmount <= 4000) {
    alert("გერიცხება კარგად ხელფასი");
} else if (finalAmount >= 1000 && finalAmount < 2000) {
    alert("გერიცხება ნორმალურად ხელფასი");
} else if (finalAmount > 0 && finalAmount < 1000) {
    alert("გერიცხება ცუდათ ხელფასი")
} else if (finalAmount === 0) {
    alert("არ გერიცხება ხელფასი");
}