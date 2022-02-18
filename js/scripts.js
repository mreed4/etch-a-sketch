let body = document.body;
let container = document.querySelector("#container");
let gridItem;
let gridSize = 16;

for (let i = 1; i <= gridSize ** 2; i++) {
  gridItem = document.createElement("div");
  container.appendChild(gridItem);
  gridItem.innerHTML = `<span class='grid-item'>${i}</span>`;
}

gridItem.addEventListener("mouseover", () => {
  gridItem.style.backgroundColor = "red";
});
