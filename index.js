const overlay_v2 = () => {
  let grid = document.getElementById("grid-animation-v2");

  for (let i = 0; i < 100; i++) {
    let cell = document.createElement("div");
    cell.classList.add("grid-cell");
    cell.setAttribute("style", "--animation-order: " + i);
    grid.appendChild(cell);
  }
};

// overlay_v2();

const overlay_v3 = () => {
  let gridImage = document.getElementById("grid-animation-image-v3");
  let grid = document.getElementById("grid-animation-v3");
  // console.log(gridImage.offsetWidth);
  // console.log(gridImage.offsetHeight);
  // let matrix =
  const createCell = (i) => {
    let cell = document.createElement("div");
    cell.classList.add("grid-cell");
    cell.setAttribute("style", "--animation-order: " + i);
    grid.appendChild(cell);
    return cell;
  };
  // create cell to get dimensions
  const cell = createCell(0);
  // get dimensions
  // console.log("width", cell.offsetWidth);
  // console.log("height", cell.offsetHeight);
  let gridImageDimensions = gridImage.getBoundingClientRect();
  let gridImageWidth = gridImageDimensions.width;
  let gridImageHeight = gridImageDimensions.height;
  let cellDimesions = cell.getBoundingClientRect();
  let cellWidth = cellDimesions.width;
  let cellHeight = cellDimesions.height;
  // generate cells based on height and width.
  // let rows = gridImage.offsetHeight / cell.offsetHeight;
  // let columns = gridImage.offsetWidth / cell.offsetWidth;
  let rows = gridImageHeight / cellHeight;
  let columns = gridImageWidth / cellWidth;
  console.log("height", cellHeight, gridImageHeight, rows);
  console.log("width", cellWidth, gridImageWidth, columns);
  // console.log("width", cell.offsetWidth, gridImage.offsetWidth, columns);
  // console.log("height", cell.offsetHeight, gridImage.offsetHeight, rows);
  // for (let i = 1; i < rows * columns + rows; i++) {
  //   createCell(i);
  // }
  console.log("rows", rows, "columns", columns, rows * columns);
  // rows = rows - 1;
  // columns = columns - 1;
  // console.log("rows", rows, "columns", columns, rows * columns);
  rows = Math.ceil(rows); // more rows is better as it is less precise
  columns = Math.round(columns); // round to nearest as it is more precise
  console.log("rows", rows, "columns", columns, rows * columns);
  // console.log(cell.getBoundingClientRect());
  cell.remove();
  let matrix = [];
  // console.log("start");
  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < columns; j++) {
      // createCell();
      /* 
        Credit to Nico Schertler for this relative distance method
        https://stackoverflow.com/questions/39182517/generating-a-matrix-with-smaller-values-approaching-the-center 
      */
      // let relativeDiffX = (2 * Math.abs(i - rows / 2)) / rows;
      // let relativeDiffY = (2 * Math.abs(j - columns / 2)) / columns;
      let relativeDiffX = (2 * Math.abs(i - rows / 2)) / (rows - 1);
      let relativeDiffY = (2 * Math.abs(j - columns / 2)) / (columns - 1);
      let t = Math.max(relativeDiffX, relativeDiffY);
      // console.log(t);
      matrix[i][j] = Math.pow(2, t).toFixed(2);
      createCell(Math.pow(2, t).toFixed(2));
      // matrix[i][j] = t.toFixed(2);
      // createCell(t.toFixed(2));
    }
  }
  // console.log(matrix);
  console.table(matrix);
  // matrix.forEach((column) => {
  //   column.forEach((i) => {
  //     createCell(i);
  //   });
  // });
  // let flatArray = [];
  // matrix.forEach((row) => {
  //   flatArray = flatArray.concat(row);
  // });
  // console.log(flatArray);
  // flatArray.forEach((i) => {
  //   createCell(i);
  // });
};

overlay_v3();
