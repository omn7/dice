var randomNumber1=Math.floor( Math.random()* 6) + 1;
var randomNumber2=Math.floor( Math.random()* 6) + 1;

var imgSource = "./images/dice" + randomNumber1 + ".png";
var img1 = document.querySelectorAll("img")[0]
img1.setAttribute("src", imgSource);

var imgSource = "./images/dice" + randomNumber2 + ".png";
var img2 = document.querySelectorAll("img")[1]
img2.setAttribute("src", imgSource);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 won ";
}
if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 won 🚩";
}
if (randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "Draw";
}