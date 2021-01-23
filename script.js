let screen = document.getElementById("screen");

let clear = document.getElementById("clear");

clear.addEventListener("click", () => {
    screen.innerHTML = "";
});

function write (event){
    let object = document.getElementById(event.target.id);
    var text = object.innerHTML;
    var toScreen = document.createTextNode(text);
    screen.appendChild(toScreen);
}

function changeSign (){
    var num = parseInt(screen.innerHTML);
    num = num * -1;
    var text = num.toString();
    screen.innerHTML = "";
    var toScreen = document.createTextNode(text);
    screen.appendChild(toScreen);
}

function solve(){
    let object = document.getElementById("screen");
    var text = eval(object.innerHTML);
    screen.innerHTML = "";
    var toScreen = document.createTextNode(text);
    screen.appendChild(toScreen);
}

let one = document.getElementById("1");
one.addEventListener("click", write);
let two = document.getElementById("2");
two.addEventListener("click", write);
let three = document.getElementById("3");
three.addEventListener("click", write);
let four = document.getElementById("4");
four.addEventListener("click", write);
let five = document.getElementById("5");
five.addEventListener("click", write);
let six = document.getElementById("6");
six.addEventListener("click", write);
let seven = document.getElementById("7");
seven.addEventListener("click", write);
let eight = document.getElementById("8");
eight.addEventListener("click", write);
let nine = document.getElementById("9");
nine.addEventListener("click", write);
let add = document.getElementById("add");
add.addEventListener("click", write);
let subtract = document.getElementById("subtract");
subtract.addEventListener("click", write);
let multiply = document.getElementById("multiply");
multiply.addEventListener("click", write);
let divide = document.getElementById("divide");
divide.addEventListener("click", write);
let equal = document.getElementById("equal");
equal.addEventListener("click", solve);

let positiveNegative = document.getElementById("positiveNegative");
positiveNegative.addEventListener("click", changeSign);