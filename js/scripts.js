let gridSize = 16;

let screen = document.querySelector("#screen");
screen.style.cssText = `
  grid-template-columns: repeat(${gridSize}, 1fr); 
  grid-template-rows: repeat(${gridSize}, 1fr);
  width: ${gridSize ** 2 * 2}px;
  height: ${gridSize ** 2 * 2}px;
`;
let gridItem;

const createDivs = (gridSize) => {
  for (let i = 1; i <= gridSize ** 2; i++) {
    gridItem = document.createElement("div");
    screen.appendChild(gridItem);
    gridItem.classList.add("grid-item");
    gridItem.innerHTML = `<span class="item-label">${i}</span>`;
  }

  changeGridItems();
};

const changeGridItems = () => {
  let allGridItems = [...screen.children];
  allGridItems.forEach((n) => {
    n.addEventListener("mouseover", () => {
      n.style.backgroundColor = "black";
      n.style.opacity = "0.2";
      n.style.border = "1px solid gainsboro";
    });
  });
};

const resetGrid = () => {
  let allGridItems = [...screen.children];
  allGridItems.forEach((n) => {
    n.style.backgroundColor = "none";
    n.style.border = "0";
  });
};

createDivs(gridSize);
