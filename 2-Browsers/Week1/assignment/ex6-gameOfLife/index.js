const CELL_SIZE = 10;
const NUM_COLUMNS = 75;
const NUM_ROWS = 40;

function createCell(x, y) {
  const alive = Math.random() > 0.5;
  return {
    x,
    y,
    alive,
    lifeTime: alive ? 1 : 0,
  };
}

export function createGame(context, numRows, numColumns) {
  const grid = [];

  function createGrid() {
    for (let y = 0; y < numRows; y++) {
      const row = [];
      for (let x = 0; x < numColumns; x++) {
        const cell = createCell(x, y);
        row.push(cell);
      }
      grid.push(row);
    }
  }

  function forEachCell(callback) {
    grid.forEach((row) => {
      row.forEach((cell) => callback(cell));
    });
  }

  function drawCell(cell) {
    context.fillStyle = '#303030';
    context.fillRect(
      cell.x * CELL_SIZE,
      cell.y * CELL_SIZE,
      CELL_SIZE,
      CELL_SIZE
    );

    if (cell.alive) {
      let opacity = 1;
      if (cell.lifeTime === 1) {
        opacity = 0.25;
      } else if (cell.lifeTime === 2) {
        opacity = 0.5;
      } else if (cell.lifeTime === 3) {
        opacity = 0.75;
      }

      context.fillStyle = `rgba(150, 50, 250, ${opacity})`;
      context.fillRect(
        cell.x * CELL_SIZE + 1,
        cell.y * CELL_SIZE + 1,
        CELL_SIZE - 2,
        CELL_SIZE - 2
      );
    }
  }

  function isAlive(x, y) {
    if (x < 0 || x >= numColumns || y < 0 || y >= numRows) {
      return 0;
    }

    return grid[y][x].alive ? 1 : 0;
  }

  function countLivingNeighbors(cell) {
    const { x, y } = cell;
    return (
      isAlive(x - 1, y - 1) +
      isAlive(x, y - 1) +
      isAlive(x + 1, y - 1) +
      isAlive(x - 1, y) +
      isAlive(x + 1, y) +
      isAlive(x - 1, y + 1) +
      isAlive(x, y + 1) +
      isAlive(x + 1, y + 1)
    );
  }

  function updateGrid() {
    forEachCell((cell) => {
      const numAlive = countLivingNeighbors(cell);

      if (numAlive === 2) {
        cell.nextAlive = cell.alive;
        cell.lifeTime = cell.alive ? cell.lifeTime : 0;
      } else if (numAlive === 3) {
        cell.nextAlive = true;
      } else {
        cell.nextAlive = false;
      }
    });

    forEachCell((cell) => {
      const wasAlive = cell.alive;
      cell.alive = cell.nextAlive ?? false;

      if (cell.alive) {
        cell.lifeTime = wasAlive ? cell.lifeTime + 1 : 1;
      } else {
        cell.lifeTime = 0;
      }
    });
  }

  function renderGrid() {
    forEachCell(drawCell);
  }

  function gameLoop() {
    updateGrid();
    renderGrid();
    setTimeout(() => {
      window.requestAnimationFrame(gameLoop);
    }, 200);
  }

  function start() {
    createGrid();
    renderGrid();
    window.requestAnimationFrame(gameLoop);
  }

  return { grid, updateGrid, start };
}

function main() {
  const canvas = document.getElementById('canvas');
  if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error('Canvas element not found');
  }

  canvas.height = NUM_ROWS * CELL_SIZE;
  canvas.width = NUM_COLUMNS * CELL_SIZE;

  const context = canvas.getContext('2d');
  if (!(context instanceof CanvasRenderingContext2D)) {
    throw new Error('Context not found');
  }

  const { start } = createGame(context, NUM_ROWS, NUM_COLUMNS);

  start();
}

try {
  window.addEventListener('load', main);
} catch {
}
