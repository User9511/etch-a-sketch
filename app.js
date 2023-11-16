const btn = document.getElementById("btn-number");
const btnClearTheBoard = document.getElementById("clear-board");
const h1 = document.getElementById("h1");
let gridWrapper = document.querySelector(".grid-wrapper");
let circles = document.querySelectorAll(".circle");
let num;
let RGBColor;
let square;

// Prompt user for a number and validate number
function handleButtonClick() {
  let userSquares = prompt("Please enter a number bewtween 2 - 50");
  num = parseInt(userSquares);

  if (isValidNumber(num)) {
    populateBoard(num);
  } else {
    alert("Error: Please enter a number bewtween 2 - 50");
  }

  function isValidNumber(num) {
    return !isNaN(num) && num >= 2 && num <= 50;
  }
}

// Generate a random color for the each square
function randomRGB() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  RGBColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(RGBColor);
}

btn.addEventListener("click", handleButtonClick);

// Create a grid layout using the user input num for columns & rows
function populateBoard(num) {
  gridWrapper = document.querySelector(".grid-wrapper");
  let squares = gridWrapper.querySelectorAll("div");
  squares.forEach((div) => {
    div.remove();
  });
  gridWrapper.style.gridTemplateColumns = `repeat(${num},1fr)`;
  gridWrapper.style.gridTemplateRows = `repeat(${num},1fr)`;

  let amount = num * num;

  for (let i = 0; i < amount; i++) {
    square = document.createElement("div");
    square.style.outline = "rgba(0, 0, 0, .11) solid 1px";
    gridWrapper.insertAdjacentElement("beforeend", square);

    square.addEventListener("pointerover", (event) => {
      event.target.style.backgroundColor = `${RGBColor}`;
      randomRGB();
    });
  }

  btn.placeholder = `Enter Grid Size: ${num} x ${num}`;
}

// Shake The Board  and Clean it
btnClearTheBoard.addEventListener("click", () => {
  setTimeout(() => {
    gridWrapper.innerHTML = "";

    h1.classList.remove("animate__animated");
    h1.classList.remove("animate__shakeX");

    gridWrapper.classList.remove("animate__animated");
    gridWrapper.classList.remove("animate__shakeX");

    circles.forEach((circle) => {
      circle.classList.remove("animate__animated");
      circle.classList.remove("animate__shakeX");
    });
  }, 1000);

  gridWrapper.style.gridTemplateColumns = `repeat(${num},1fr)`;
  gridWrapper.style.gridTemplateRows = `repeat(${num},1fr)`;
  h1.classList.add("animate__animated");
  h1.classList.add("animate__shakeX");

  gridWrapper.classList.add("animate__animated");
  gridWrapper.classList.add("animate__shakeX");

  circles.forEach((circle) => {
    circle.classList.add("animate__animated");
    circle.classList.add("animate__shakeX");
  });
});
