//Get Random Number
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//Change Dice Image
$(".img1").attr("src", "images/dice" + randomNumber1 + ".png");
$(".img2").attr("src", "images/dice" + randomNumber2 + ".png");

// Change title
if (randomNumber1 > randomNumber2) {
  $("h1").text("🚩 Player1 Win!");
} else if (randomNumber2 > randomNumber1) {
  $("h1").text("Player2 Win! 🚩");
} else {
  $("h1").text("Draw!");
}
