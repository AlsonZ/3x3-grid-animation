const overlay_v2 = () => {
  let grid = document.getElementById("grid-animation-v2");

  for (let i = 0; i < 100; i++) {
    let cell = document.createElement("div");
    cell.classList.add("matrix-grid-cell");
    cell.setAttribute("style", "--animation-order: " + i);
    grid.appendChild(cell);
  }
};

overlay_v2();

const overlay_v3 = () => {
  let gridImage = document.getElementById("grid-animation-image-v3");
  let grid = document.getElementById("grid-animation-v3");
  // console.log(gridImage.offsetWidth);
  // console.log(gridImage.offsetHeight);
  // let matrix =
  const createCell = (i) => {
    let cell = document.createElement("div");
    cell.classList.add("matrix-grid-cell");
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
  // console.log("height", cellHeight, gridImageHeight, rows);
  // console.log("width", cellWidth, gridImageWidth, columns);
  // console.log("width", cell.offsetWidth, gridImage.offsetWidth, columns);
  // console.log("height", cell.offsetHeight, gridImage.offsetHeight, rows);
  // for (let i = 1; i < rows * columns + rows; i++) {
  //   createCell(i);
  // }
  // console.log("rows", rows, "columns", columns, rows * columns);
  // rows = rows - 1;
  // columns = columns - 1;
  // console.log("rows", rows, "columns", columns, rows * columns);
  rows = Math.ceil(rows); // more rows is better as it is less precise
  columns = Math.round(columns); // round to nearest as it is more precise
  // console.log("rows", rows, "columns", columns, rows * columns);
  // console.log(cell.getBoundingClientRect());
  cell.remove();
  let matrix = [];
  // console.log("start");
  for (let i = 1; i <= rows; i++) {
    matrix[i] = [];
    for (let j = 1; j <= columns; j++) {
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
      matrix[i][j] = Math.pow(2.1, t).toFixed(2);
      createCell(Math.pow(2.1, t).toFixed(2));
      // matrix[i][j] = t.toFixed(2);
      // createCell(t.toFixed(2));
    }
  }
  // console.log(matrix);
  // console.table(matrix);
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

const overlay_v4 = () => {
  // console.log("overlay_v4");
  let gridImage = document.getElementById("grid-animation-image-v4");
  // gridImage.style.height = gridImage.getBoundingClientRect().width;
  document.getElementById("grid-animation-image-v4").style.height =
    gridImage.getBoundingClientRect().width + "px";
  // ).style.height = "100px";
  // console.log(gridImage.getBoundingClientRect().width);
  // console.log(document.getElementById("grid-animation-image-v4").style.height);
  // cell.setAttribute("style", "height" + i);
};

overlay_v4();

const background_image_v1 = () => {
  let gridImage = document.getElementById("grid-animation-image-v4");
  let grid = document.getElementById("grid-animation-v4");
  const createCell = (i) => {
    let cell = document.createElement("div");
    cell.classList.add("matrix-grid-cell");
    cell.setAttribute("style", "--animation-order: " + i);
    grid.appendChild(cell);
    return cell;
  };
  const cell = createCell(0);
  // get dimensions
  let gridImageDimensions = gridImage.getBoundingClientRect();
  let gridImageWidth = gridImageDimensions.width;
  let gridImageHeight = gridImageDimensions.height;
  let cellDimesions = cell.getBoundingClientRect();
  let cellWidth = cellDimesions.width;
  let cellHeight = cellDimesions.height;
  // generate cells based on height and width.
  let rows = gridImageHeight / cellHeight;
  let columns = gridImageWidth / cellWidth;
  // console.log("height", cellHeight, gridImageHeight, rows);
  // console.log("width", cellWidth, gridImageWidth, columns);
  columns = Math.round(columns);
  rows = Math.round(rows);
  cell.remove();
  let centerPoint = (rows - 1) / 2;
  // console.log("centerPoint", centerPoint);
  let matrix = [];
  const distanceFromCenter = (i, j) => {
    // get absolute value of i - centerpoint;
    // if more than one centerpoint this will be different
    let row = Math.abs(i - centerPoint);
    let column = Math.abs(j - centerPoint);
    // console.log(i, row, column);
    return Math.max(row, column);
  };
  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < columns; j++) {
      let val = distanceFromCenter(i, j);
      matrix[i][j] = val;
      createCell(val);
    }
  }
  // console.log("testing new");
  // console.table(matrix);
};

background_image_v1();

const generate_grid = (grid, gridImage) => {
  let gridImageElement = document.getElementById(gridImage);
  let gridElement = document.getElementById(grid);
  const createCell = (i) => {
    let cell = document.createElement("div");
    cell.classList.add("matrix-grid-cell");
    cell.setAttribute("style", "--animation-order: " + i);
    gridElement.appendChild(cell);
    return cell;
  };
  const getDimensions = () => {
    const cell = createCell(0);
    // get dimensions
    let {
      width: gridImageWidth,
      height: gridImageHeight,
    } = gridImageElement.getBoundingClientRect();
    let { width: cellWidth, height: cellHeight } = cell.getBoundingClientRect();
    // get number of rows and columns
    let rows = gridImageHeight / cellHeight;
    let columns = gridImageWidth / cellWidth;
    // console.log("rows:", rows);

    // console.log("columns:", columns);
    columns = Math.round(columns);
    rows = Math.ceil(rows);
    // rows = Math.round(rows);
    // console.log("grid:", rows, columns);
    cell.remove(); // remove initial cell
    return { rows, columns };
  };
  // const distanceFromCenter = (i, j) => {
  //   let row = Math.abs(i - centerPoint);
  //   let column = Math.abs(j - centerPoint);
  //   return Math.max(row, column);
  // };

  const distanceFromCenterv2 = (i, j) => {
    let row1 = Math.abs(i - centerRow1);
    let row2 = Math.abs(i - centerRow2);
    let column1 = Math.abs(j - centerColumn1);
    let column2 = Math.abs(j - centerColumn2);
    if (
      (i == centerRow1 && j == centerColumn1) ||
      (i == centerRow2 && j == centerColumn2) ||
      (i == centerRow1 && j == centerColumn2) ||
      (i == centerRow2 && j == centerColumn1)
    ) {
      // console.log(row1, row2, column1, column2);
      return 0;
    }
    return Math.max(row1, row2, column1, column2);
  };
  const generate_matrix = () => {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
      matrix[i] = [];
      for (let j = 0; j < columns; j++) {
        // let val = distanceFromCenter(i, j);
        let val = distanceFromCenterv2(i, j);
        matrix[i][j] = val;
        createCell(val);
      }
    }
    return matrix;
  };
  let { rows, columns } = getDimensions();
  let centerPoint = (columns - 1) / 2;
  let centerColumn1 = Math.floor((columns - 1) / 2); // round down? does not work with even numbers
  let centerColumn2 = Math.floor(columns / 2); // round down when odd?
  let centerRow1 = Math.floor((rows - 1) / 2); // works with odd numbers
  let centerRow2 = Math.floor(rows / 2); // does not work with odd numbers round down?
  console.log(centerColumn1, centerColumn2, centerRow1, centerRow2);
  // console.log(Math.floor(centerColumn1), Math.floor(centerRow1));
  // console.log(Math.floor(centerColumn2), Math.floor(centerRow2));
  // console.log("center", centerPoint);
  let matrix = generate_matrix();
  console.log("homepage matrix");
  console.table(matrix);
};

generate_grid("grid-animation-v5", "grid-animation-image-v5");
