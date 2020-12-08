let grid = document.getElementById("grid-animation-v2");

for (let i = 0; i < 100; i++) {
  let cell = document.createElement("div");
  cell.classList.add("grid-cell");
  cell.setAttribute("style", "--animation-order: " + i);
  grid.appendChild(cell);
}
