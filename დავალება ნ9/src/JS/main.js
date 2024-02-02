// ნომერი 1

const arr = [10, 50, "Hello", true, 5.62];

arr.forEach((item) => {
    document.write(item + "  ");
});

document.write("<br>");
// ნომერი 2

function display(x, secondfunc) {
    let a = secondfunc(x);

    return a;
}

function shefasebisfunc(price) {
    if (price >= 20 && price <= 50) {
        document.writeln("იაფია");
    } else if (price == 0) {
        document.writeln("უფასოა წაიღე");
    } else if (price < 20) {
        document.writeln("ძალიან იაფია");
    } else {
        document.writeln("ძალიან ძვირია დამიკელი რა");
    }

}

const print = display(15, shefasebisfunc);

document.write("<br>");


// ნომერი 3 

const numberArray = [15, 53, 22, 198, 10, 28, 16, 70, 33, 951];
document.write("Max number is : " + Math.max(...numberArray));