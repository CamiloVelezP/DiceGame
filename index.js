var randomNumber1 = Math.floor(Math.random()*6) +1;//1-6 number
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "dice"+randomNumber1+".png"; // imagen de dado 1-6 aleatorio
var randomImageSource = "images/" +randomDiceImage; //source de la imagen
var randomImageSource2 = "images/dice"+randomNumber2+".png";
var imgs1 = document.querySelectorAll("img")[0]; // imagen 1
imgs1 = imgs1.setAttribute("src", randomImageSource);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); //cambia imagen 2
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩"
} else if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
} else{
  document.querySelector("h1").innerHTML = "Draw!"
}
