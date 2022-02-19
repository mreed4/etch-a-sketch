// Creates the screen
let baseSize = 4;
let screenResolution = 8;
let screenSizeInPixels = 512;

let screen = document.querySelector("#screen");
screen.style.cssText = `
  grid-template-columns: repeat(${baseSize * screenResolution}, 1fr); 
  grid-template-rows: repeat(${baseSize * screenResolution}, 1fr);
  width: ${screenSizeInPixels}px;
  height: ${screenSizeInPixels}px;
`;

let gridItem;

const createDivs = (baseSize) => {
  for (let i = 1; i <= (baseSize * screenResolution) ** 2; i++) {
    gridItem = document.createElement("div");
    screen.appendChild(gridItem);
    gridItem.classList.add("grid-item");
    gridItem.innerHTML = `<span class="item-label">${i - 1}</span>`;
  }

  changeGridItems();
};

const changeGridItems = () => {
  let allGridItems = [...screen.children];
  let rightSideItems = [];
  let bottomItems = [];

  let leftTopCorner = 0;
  let rightTopCorner = baseSize * screenResolution - 1;
  let rightBottomCorner = Math.pow(baseSize * screenResolution, 2) - 1;
  let leftBottomCorner = Math.pow(baseSize * screenResolution, 2) - baseSize * screenResolution;

  let gridCorners = [leftTopCorner, rightTopCorner, rightBottomCorner, leftBottomCorner]; // => array of numbers
  // gridCorners.map((n) => allGridItems[n]).forEach((n) => (n.style.backgroundColor = "green"));

  // Creates array of all elements on right side
  for (let i = rightTopCorner; i <= allGridItems.length; i += baseSize) {
    rightSideItems.push(allGridItems[i]);
  }

  // Creates array of all elements on right side
  for (let i = leftBottomCorner; i < allGridItems.length; i++) {
    bottomItems.push(allGridItems[i]);
  }

  // Removes borders where/as necessary
  rightSideItems.forEach((n) => (n.style.borderRightWidth = "0"));
  bottomItems.forEach((n) => (n.style.borderBottomWidth = "0"));

  // Adds mouse event to each grid item
  allGridItems.forEach((n) => {
    n.addEventListener("mouseover", () => {
      n.style.backgroundColor = "rgba(0, 0, 0, 1)";
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
    n.style.border = "0";
  });
};

createDivs(baseSize);
