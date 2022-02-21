// Values are set by user inputs
let userChoice = 64;
let rainbowMode = false;

// Logging
console.log(`Length of side: ${userChoice}`);
console.log(`Total items: ${Math.pow(userChoice, 2)}`);
console.log(`Rainbow mode: ${rainbowMode ? "on" : "off"}`);

// User can define the grid size
const userInput = () => {
  let sizeInput = document.getElementById("grid-size");
  let submitButton = document.getElementById("submit-button");

  submitButton.addEventListener("click", () => {
    userChoice = sizeInput.value;
    sizeInput.value = "";
    console.log(`Length of side: ${userChoice}`);
    console.log(`Total items: ${Math.pow(userChoice, 2)}`);
    console.log(`Rainbow mode: ${rainbowMode ? "on" : "off"}`);

    createScreen(userChoice);
  });
};

// Creates the screen
const createScreen = (userChoice) => {
  let sideLength = userChoice;
  let screenMultiplier = 1; // "Resolution" - The higher this is the more detailed the screen will be
  let totalItems = sideLength * screenMultiplier;
  let screen = document.querySelector("#screen");
  screen.style.cssText = `
    grid-template-columns: repeat(${totalItems}, 1fr); 
    grid-template-rows: repeat(${totalItems}, 1fr);
  `;

  createItems(totalItems, screen);
};

// Creates items in the screen
const createItems = (totalItems, screen) => {
  for (let i = 1; i <= totalItems ** 2; i++) {
    let gridItem = document.createElement("div");
    screen.appendChild(gridItem);
  }

  changeGridItems(screen);
};

// Colors each item
const changeGridItems = (screen) => {
  let allGridItems = [...screen.children];

  // Adds mouse event to each grid item
  allGridItems.forEach((n) => {
    n.addEventListener("mouseenter", () => {
      // Rainbow mode
      const getRandomRGB = () => {
        let randomR = Math.floor(Math.random() * 256);
        let randomG = Math.floor(Math.random() * 256);
        let randomB = Math.floor(Math.random() * 256);
        let rgb = [randomR, randomG, randomB];
        return rgb;
      };

      let color = getRandomRGB();
      let r = color[0];
      let g = color[1];
      let b = color[2];

      if (rainbowMode) {
        n.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`;
      } else {
        n.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
      }
    });
  });

  // Toggle rainbow mode
  let rainbowCheckbox = document.getElementById("rainbow-mode");
  rainbowCheckbox.addEventListener("click", () => {
    if (rainbowCheckbox.checked) {
      rainbowMode = true;
      console.log(`Rainbow mode: ${rainbowMode ? "on" : "off"}`);
    } else {
      rainbowMode = false;
      console.log(`Rainbow mode: ${rainbowMode ? "on" : "off"}`);
    }
  });

  resetScreen(allGridItems);
};

const resetScreen = (allGridItems) => {
  let btn = document.querySelector("#reset-button");
  btn.addEventListener("click", () => {
    allGridItems.forEach((n) => {
      n.style.backgroundColor = "transparent";
    });
  });
};

createScreen(userChoice);
userInput();
