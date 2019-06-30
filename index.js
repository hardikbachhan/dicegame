//
// // for dice 1
//
// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//
// var diceImageSource1 = "images/dice" + randomNumber1 + ".png";
//
// document.querySelectorAll("img")[0].setAttribute("src",diceImageSource1);
//
// // for dice 2
//
// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//
// var diceImageSource2 = "images/dice" + randomNumber2 + ".png";
//
// document.querySelectorAll("img")[1].setAttribute("src",diceImageSource2);



// For Dice 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

if (randomNumber1 === 1) {
  document.querySelector("div .img1").setAttribute("src", "images/dice1.png");
} else if (randomNumber1 === 2) {
  document.querySelector("div .img1").setAttribute("src", "images/dice2.png");
} else if (randomNumber1 === 3) {
  document.querySelector("div .img1").setAttribute("src", "images/dice3.png");
} else if (randomNumber1 === 4) {
  document.querySelector("div .img1").setAttribute("src", "images/dice4.png");
} else if (randomNumber1 === 5) {
  document.querySelector("div .img1").setAttribute("src", "images/dice5.png");
} else {
  document.querySelector("div .img1").setAttribute("src", "images/dice6.png");
}

// For Dice 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

if (randomNumber2 === 1) {
  document.querySelector("div .img2").setAttribute("src", "images/dice1.png");
} else if (randomNumber2 === 2) {
  document.querySelector("div .img2").setAttribute("src", "images/dice2.png");
} else if (randomNumber2 === 3) {
  document.querySelector("div .img2").setAttribute("src", "images/dice3.png");
} else if (randomNumber2 === 4) {
  document.querySelector("div .img2").setAttribute("src", "images/dice4.png");
} else if (randomNumber2 === 5) {
  document.querySelector("div .img2").setAttribute("src", "images/dice5.png");
} else {
  document.querySelector("div .img2").setAttribute("src", "images/dice6.png");
}


// Change in Title according to dice roll

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "<em>🚩Player 1 Wins!</em>";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "<em>Player 2 Wins!🚩</em>";
} else {
  document.querySelector("h1").innerHTML = "<em>Draw!</em>";
}
