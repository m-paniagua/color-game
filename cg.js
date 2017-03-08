// JavaScript File
var currColor;
var difficult = 6;
var squares = document.getElementsByClassName("square");

start();
//initialize game
function start() {
    setSquare();
    reset();
}

//add event listeners and generate colors for each square
function setSquare() {
    for (var i =0; i < squares.length; i++) {
        squares[i].style.backgroundColor = randomColor();
        squares[i].addEventListener("click", match);
    }
    currColor = squares[Math.floor(Math.random() * difficult)].style.backgroundColor;
    document.getElementById("RGBCol").innerHTML = currColor;
}

//reset header activate/deactivate squares
function reset() {
    for (var i =0; i < squares.length; i++) {
        if (i < difficult) 
            squares[i].style.visibility = "visible";
        else
            squares[i].style.visibility = "hidden";
    }
    document.getElementById("result").innerHTML ="Click the correct color!";
    document.getElementById("header").style.backgroundColor = "rgb(52, 85, 184)";
    document.getElementById("newGame").innerHTML = "New Colors"
}

//check if guess correct
function match() {
    if (currColor == this.style.backgroundColor) {
        winner(this);
    }
    else {
        wrong(this);
    }
}

//generate random color
function randomColor() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var rgb = "RGB(" + red + ", " + green + ", " + blue + ")";
	return rgb;
}

//display winning message, change all squares color
function winner(item) {
    document.getElementById("result").innerHTML ="You win!";
    document.getElementById("header").style.backgroundColor = currColor;
    document.getElementById("newGame").innerHTML = "Play again?"
    for (var i = 0; i < difficult; i++) {
        squares[i].style.visibility = "visible";
        squares[i].style.backgroundColor = currColor;
    }
}

//prompt to try again, hide wrong choice
function wrong(item) {
    document.getElementById("result").innerHTML ="Try again!";
    item.style.visibility = "hidden"; 
}

//set difficulty, color clicked button
function setDiff(elem) {
    if (elem.id == "easy") {
        difficult = 3;
        elem.style.backgroundColor = "rgb(52, 85, 184)";
        elem.style.color = "white";
        document.getElementById("hard").style.backgroundColor = "white";
        document.getElementById("hard").style.color = "rgb(52, 85, 184)";
        start();
    } else {
        difficult = 6;
        elem.style.backgroundColor = "rgb(52, 85, 184)";
        elem.style.color = "white";
        document.getElementById("easy").style.backgroundColor = "white";
        document.getElementById("easy").style.color = "rgb(52, 85, 184)";
        start();
    }
}