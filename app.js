const btn = document.querySelector("button");
let num;

// Prompt user for a number and validate number
function handleButtonClick() {
  let userSquares = prompt("Please enter a number bewtween 2 - 100");
  num = parseInt(userSquares);

  if (isValidNumber(num)) {
    populateBoard(num);
  } else {
    alert("Error: Please enter a number bewtween 2 - 100");
  }

  function isValidNumber(num) {
    return !isNaN(num) && num >= 2 && num <= 100;
  }
}

btn.addEventListener("click", handleButtonClick);

// Create a grid layout using the user input num for columns & rows
function populateBoard(num) {
  let gridWrapper = document.querySelector(".grid-wrapper");
  let squares = gridWrapper.querySelectorAll("div");
  squares.forEach((div) => {
    div.remove();
  });
  gridWrapper.style.gridTemplateColumns = `repeat(${num},1fr)`;
  gridWrapper.style.gridTemplateRows = `repeat(${num},1fr)`;

  let amount = num * num;

  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.style.outline = "1px solid black";
    gridWrapper.insertAdjacentElement("beforeend", square);

    square.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "red";
    });
    square.addEventListener("mouseout", (event) => {
      event.target.style.backgroundColor = "transparent";
    });
  }
}
