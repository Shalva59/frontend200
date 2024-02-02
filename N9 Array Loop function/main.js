const arr = ["first", 10, null, "4.5"];

arr.forEach((element) => console.log(element));



const arrNumber = [1, 3, 5, 7];
const new_array = arrNumber.map((x) => x * 2);
console.log(new_array);


new_array.forEach((elem) => {
    console.log(elem)
});


const arraystring = ["Bob", "Anna", "Elizabeth", "Joe"]

arraystring.forEach(arrayFunc)

function arrayFunc(params) {
    console.log(params)
}

console.log();

arraystring.forEach((x) => {
    console.log(x)

});


arraystring.map((newArr) => {
    if (newArr.length - 1 === arraystring.length - 1) {
        arraystring.push("shako");
    }
});

console.log(arraystring)

const b = ["tt", "ff", "hh"]

for (var index in b) {
    console.log(index);
}


var people = [
    ["Tom", 25, false],
    ["Alice", 18, true],
    ["Ben", 30, true]
]


people.forEach((item) => {
    document.write(item + "</br>");
    item.forEach((item2) => {
        document.write(item2);
    })
    document.write("</br>");
})

people.map((item) => {
    document.write(item + "</br>");
});


// სტანდარტული ფუნცქცია
function display() {
    document.write("Hello");
}

display();


// ანონიმური ფუნცქცია
var second_function = function (params) {
    document.write("Hello world");
}

second_function();


// Arrow ფუნცქცია / ანონიმური ფუნქცია 
const thirdFunction = () => {
    document.write("Hello world");
}


/////////////////// test functions ///////////////////

// const sum3 = () => {
//     console.log(arguments.length)
// }

// sum3(6, 5, 4);


function sum4() {
    console.log(arguments.length)
}
sum4(6, 5, 4);


function displayMorning(x, func) {
    let message = func(x);
    document.write(message);
}


function welcomeMessage(time) {
    if (time < 12) {
        return "good";
    }
}

let a = displayMorning(11, welcomeMessage);

console.log(a)