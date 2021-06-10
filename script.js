let counter = 0;
var fireworkSrc = "images/firework.gif";
var fireworkStyles = [
  "extra-small-firework",
  "small-firework"
];
document.onclick = userClicked;
function userClicked() {
  var x = event.clientX + window.pageXOffset;
  var y = event.clientY + window.pageYOffset;
  var randomIndex = Math.floor(Math.random() * fireworkStyles.length);
  var firework = document.getElementById("firework");
  firework.setAttribute("class", fireworkStyles[randomIndex]);
  firework.style.display = "";
  firework.style.position = "absolute";
  firework.style.left = x - firework.getBoundingClientRect().width / 2 + "px";
  firework.style.top = y - firework.getBoundingClientRect().height / 2 + "px";
  if (counter === 0) {
    firework.setAttribute("src", fireworkSrc);
    startTimer();
    counter = 1;
  }
}

function startTimer() {
  setTimeout(hideImage, 4000);
}

function hideImage() {
  var firework = document.getElementById("firework");
  firework.setAttribute("src", "");
  firework.style.display = "none";
  counter = 0;
}