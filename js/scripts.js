// Values are set by user inputs
let userChoice = 64;
let partyMode = false;

// Logging
console.log(`Length of side: ${userChoice}`);
console.log(`Total items: ${Math.pow(userChoice, 2)}`);
console.log(`Partymode: ${partyMode ? "on" : "off"}`);

// Party mode off/on
const togglePartyMode = () => {
  let partyModeCheckbox = document.getElementById("partymode");
  let partyModeLabel = document.getElementById("partymode-label");

  partyModeCheckbox.addEventListener("click", () => {
    if (partyModeCheckbox.checked) {
      partyMode = true;

      let color = getRandomRGB();
      let r = color[0];
      let g = color[1];
      let b = color[2];

      const partyModeDisco = () => {
        partyModeLabel.style.cssText = `opacity: 1; font-weight: 300; color: white; text-shadow: 0 0 1px rgba(${r}, ${g}, ${b}, 0.7), 0 0 2px rgba(${r}, ${g}, ${b}, 1), 0 0 12px rgba(${r}, ${g}, ${b}, 1);`;
        color = getRandomRGB();
        r = color[0];
        g = color[1];
        b = color[2];
      };

      setInterval(partyModeDisco, 350);

      console.log(`Partymode: ${partyMode ? "on" : "off"}`);
    } else {
      partyMode = false;
      console.log(`Partymode: ${partyMode ? "on" : "off"}`);
    }
  });
};

// Random color generator
const getRandomRGB = () => {
  let randomR = Math.floor(Math.random() * 256);
  let randomG = Math.floor(Math.random() * 256);
  let randomB = Math.floor(Math.random() * 256);
  let rgb = [randomR, randomG, randomB];
  return rgb;
};

// User can define the grid size
const userInput = () => {
  let sizeInput = document.getElementById("grid-size");
  let submitButton = document.getElementById("submit-button");

  submitButton.addEventListener("click", () => {
    userChoice = sizeInput.value;
    sizeInput.value = "";
    console.log(`Length of side: ${userChoice}`);
    console.log(`Total items: ${Math.pow(userChoice, 2)}`);
    console.log(`Partymode: ${partyMode ? "on" : "off"}`);

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
      if (partyMode) {
        let color = getRandomRGB();
        let r = color[0];
        let g = color[1];
        let b = color[2];
        n.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`;
      } else {
        n.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
      }
    });
  });

  togglePartyMode();
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
