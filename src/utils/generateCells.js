const generateCells = (MAX_ROWS, MAX_COLS, NO_OF_BOMBS) => {
    const cells = [];
    for (let row = 0; row < MAX_ROWS; row++) {
      cells.push([]);
      for (let col = 0; col < MAX_COLS; col++) {
        cells[row].push({ bomb: false, state: 0 });
      }
    }
    console.log(MAX_ROWS, MAX_COLS, NO_OF_BOMBS)
  
    // randomly put i bombs in any cells
    for (let i = 0; i < NO_OF_BOMBS; i++) {
      let placedBomb = false;
      while (!placedBomb) {
        let row = Math.floor(Math.random() * MAX_ROWS);
        let col = Math.floor(Math.random() * MAX_COLS);
  
        if (!cells[row][col].bomb) {
          cells[row][col].bomb = true;
          placedBomb = true;
        }
      }
    }
  
    // calculate the value of each cell
    for (let row = 0; row < MAX_ROWS; row++) {
      for (let col = 0; col < MAX_COLS; col++) {
        const cell = cells[row][col];
        if (cell.bomb) {
          cell.value = -1;
          continue;
        }
        
        let counter = 0;
        if (row > 0 && col > 0 && cells[row - 1][col - 1].bomb) {
          counter++;
        }
        if (row > 0 && cells[row - 1][col].bomb) {
          counter++;
        }
        if (row > 0 && col < (MAX_COLS - 1) && cells[row - 1][col + 1].bomb) {
          counter++;
        }
        if (col > 0 && cells[row][col - 1].bomb) {
          counter++;
        }
        if (col < (MAX_COLS - 1) && cells[row][col + 1].bomb) {
          counter++;
        }
        if (row < (MAX_ROWS - 1) && col > 0 && cells[row + 1][col - 1].bomb) {
          counter++;
        }
        if (row < (MAX_ROWS - 1) && cells[row + 1][col].bomb) {
          counter++;
        }
        if (row < (MAX_ROWS - 1) && col < (MAX_COLS - 1) && cells[row + 1][col + 1].bomb) {
          counter++;
        }
  
        cell.value = counter;
      }
    }
  
    return cells;
  };
  
  export default generateCells;