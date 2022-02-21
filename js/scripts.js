// Creates the screen
let userChoice = 16;
let rainbowMode = false;

const createScreen = () => {
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
    gridItem.classList.add("grid-item");
    // gridItem.innerHTML = `<span class="item-label">${i}</span>`;
  }

  changeGridItems(screen);
};

const getRandomRGB = () => {
  let randomR = Math.floor(Math.random() * 256);
  let randomG = Math.floor(Math.random() * 256);
  let randomB = Math.floor(Math.random() * 256);
  return [randomR, randomG, randomB];
};

//
const changeGridItems = (screen) => {
  let allGridItems = [...screen.children];

  // Adds mouse event to each grid item
  allGridItems.forEach((n) => {
    n.addEventListener("mouseover", () => {
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

  /*
  allGridItems.forEach((n) => {
    n.addEventListener("mouseenter", () => {
      n.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    });
  });

  allGridItems.forEach((n) => {
    n.addEventListener("click", () => {
      n.style.backgroundColor = "rgba(0, 0, 0, 1)";
    });
  });

  allGridItems.forEach((n) => {
    n.addEventListener("mouseleave", () => {
      if (n.style.backgroundColor === "rgba(0, 0, 0, 1)") {
        n.style.backgroundColor = "rgba(0, 0, 0, 1)";
      } else {
        n.style.backgroundColor = "transparent";
      }
    });
  });
  */
};

const resetGrid = () => {
  let allGridItems = [...screen.children];
  allGridItems.forEach((n) => {
    n.style.backgroundColor = "none";
  });
};

createScreen();

console.log(`Length of side: ${userChoice}`);
console.log(`Total items: ${Math.pow(userChoice, 2)}`);
