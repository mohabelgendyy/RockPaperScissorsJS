//console.log("i like pizaa");

//window.alert("i am really not happy");

//console.log("Hello");
//console.log("test");
//window.alert("sangob sangb");

/*let firstName = "mohab";
let age = 22;
let student = true;

console.log(" Hello ", firstName);
console.log("you are", age, "years old");
console.log("enrolled", student);


document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "you are " + age + " years old ";
document.getElementById("p3").innerHTML = "enrolled " + student;*/

/*let username;

document.getElementById("myButton").onclick = function(){

    username = document.getElementById("mytext").value;
    console.log(username);
    document.getElementById("mylabel").innerHTML = " Hello " + username;
}*/

//let firstName;
//let lastName;

//firstName = fullName.slice(0, fullName.indexOf(" "));
//lastName = fullName.slice(fullName.indexOf(" ") + 1);

//console.log(firstName);
//console.log(lastName);
/*let userName = "Mohab Elgendy";

let letter = userName.charAt(0).toUpperCase().trim();

console.log(letter);*/

/*let age = 65;

if(age >= 65){
    console.log("you are senior!");
}

else if(age >= 18){
    console.log("you are an adult!");
}
else if(age < 0){
    console.log("you haven't born yet!");
}
else{
    console.log("you are a child!");
}

//let age;
console.log()*/

/*document.getElementById("myButton").onclick = function(){

    //const myCheckBox = document.getElementById("myCheckBOX");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    //if(myCheckBox.checked){
        //console.log("you are subscribed!");
    //}
    //else{
        //console.log("you are NOT subscribed!");
   // }
    
    if(visaBtn.checked){
        console.log("you are paying with visa!");
    }
    else if(mastercardBtn.checked){
        console.log("you are paying with mastercard!");
    }
    else if(paypalBtn.checked){
        console.log("you are paying with paypal!");
    }
    else{
        console.log("you must select a payment type!");
    }
}*/

//let userName;

/*do{
    userName = window.prompt("Enter your name");
}while(userName == "")

console.log("Hello", userName);*/

/*let userName = "mohab";
let age = "29";


console.log ("hello", userName);
console.log("your age is", age);*/

/*let area;
let width;
let height;

width = window.prompt("enter width");
height = window.prompt("enter height");

area = getArea(width, height);

console.log("the area is:", area);

function getArea(width, height){
    return width * height;
}*/

/*let userName = "Mohab";
let items = 3;
let total = 75;

let text =
`Hello ${userName}<br>
you have ${items} items in your cart<br>
your total is $${total}<br>`;

document.getElementById("myLabel").innerHTML = text;*/

/*const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function(){

    let guess = document.getElementById("guessField").value
    guesses+=1;

    if(guess == answer){
      alert(`${answer}is the #. it took you ${guesses} guesses`)
    }
    else if(guess < answer){
        alert("too small!");
    }
    else{
        alert("too large!");
    }
}*/

/*let grades = [100, 70, 50, 60, 80, 90];

grades = grades.sort(ascendingSort);

grades.forEach(print);

function descendingSort(x, y){
    return y - x;

}
function ascendingSort(x, y){
    return x - y;

}
function print(element){
    console.log(element);
}*/

//const percent = (x, y) => x / y * 100;

//console.log(`${percent(37, 50)}%`);

/*class Animal{
    alive = true;

    eat(){
        console.log(`this${this.name} is eating`);
    }
    sleep(){
        console.log(`this ${this.name} is sleeping`);
    }

}
class Rabbit extends Animal{
    alive = true;

    name = "rabbit";

    run(){
        console.log(`this ${this.name} is running`);
    }

}
class Fish extends Animal{

    name = "fish";

    swim(){
        console.log(`this ${this.name} is swimming`);
    }

}
class Hawk extends Animal{
    name = "hawk";

    fly(){
        console.log(`this ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);*/

/*const myLabel = document.getElementById("myLabel");

update();
setInterval(update, 1000);

function update(){

    let date = new Date();
    myLabel.innerHTML = formatTime(date);

    function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amorpm = hours >= 12 ? "pm" : "am";

        hours = (hours % 12) || 12;

        hours = formatZeroes(hours);
        minutes = formatZeroes(minutes);
        seconds = formatZeroes(seconds);

        return `${hours}:${minutes}:${seconds} ${amorpm}`;
    }
    function formatZeroes(time){
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
}*/

//import {PI, getCircumference, getArea} from "./math_util.js";
/*import * as MathUtil from "./math_util.js";

console.log(MathUtil.PI);

let Circumference = MathUtil.getCircumference(10);
console.log(Circumference);

let area = MathUtil.getArea(10);
console.log(area);*/

/*let element = document.getElementById("myTitle");
element.style.backgroundColor = "blue";

let fruits = document.getElementsByName("fruits");
console.log(fruits);*/

/*const myButton = document.querySelector("#myButton");
const myImg = document.querySelector("#myImg");

myButton.addEventListener("click", () =>{
    if(myImg.style.visibility == "hidden"){
        myImg.style.visibility = "visible";
    }
    else{
        myImg.style.visibility = "hidden";
    }
})*/

/*const myDiv = document.getElementById("myDiv");
window.addEventListener("keydown", move);
let x = 0;
let y = 0;

function move(event){
    switch(event.key){
        case "ArrowDown":
            y+=5;
            myDiv.style.top = y + "px";
            break;
        case "ArrowUp":
            y-=5;
            myDiv.style.top = y + "px";
            break;
        case "ArrowRight":
            x+=5;
            myDiv.style.left = y + "px";
            break;
        case "ArrowLeft":
            x-=5;
            myDiv.style.left = y + "px";
            break;
        default:
            break;

    }
}*/

/*const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");

myButton.addEventListener("click", begin);

function begin(){
    let timerId = null;
    let x = 0;
    let y = 0;
    let degrees = 0;

    timerId = setInterval(frame, 5);

    function frame(){
        if (x >= 200 || y >= 200){
            clearInterval(timerId);
        }
        else{
           x+=1;
           y+=1;
           myAnimation.style.left = x + "px";
           myAnimation.style.top = y + "px";
           degrees+=2;
           myAnimation.style.transform = "rotateZ("+degrees+"deg)";
        }
    }
}*/

/*const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 75);
    }
});
pauseBtn.addEventListener("click", () => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
resetBtn.addEventListener("click", () => {
    paused=true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    timeDisplay.textContent = "00:00:00";

});

function updateTime(){
    elapsedTime - Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    
    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);
    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

    function pad(unit){
        return(("0") + unit).length > 2 ? unit : "0" + unit;
    }
}*/

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `player: ${player}`;
    computerText.textContent = `computer: ${computer}`;
    resultText.textContent = checkWinner();
  })
);

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;

  switch (randNum) {
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper";
      break;
    case 3:
      computer = "Scissors";
      break;
  }
}
function checkWinner() {
  if (player == computer) {
    return "Draw!";
  } else if (computer == "Rock") {
    return player == "Paper" ? "You Win!" : "You lose!";
  } else if (computer == "Paper") {
    return player == "Scissors" ? "You Win!" : "You lose!";
  } else if (computer == "Scissors") {
    return player == "Rock" ? "You Win!" : "You lose!";
  }
}
