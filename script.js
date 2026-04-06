// script.js
const grid = document.getElementById('grid');
const rows = 20;
const cols = 10;

const scoreDisplay = document.getElementById('score');
let score = 0;

// Buat grid
for (let i = 0; i < rows * cols; i++) {
  const cell = document.createElement('div');
  grid.appendChild(cell);
}

// Array untuk menyimpan posisi balok
const gridCells = Array.from(grid.children);
let currentBlock = [4, 5, 6]; // Posisi awal balok (3 sel)
// Balok aktif
function drawBlock() {
  currentBlock.forEach(index => gridCells[index].classList.add('block'));
}

// Hapus balok
function clearBlock() {
  currentBlock.forEach(index => gridCells[index].classList.remove('block'));
}

// Balok jatuh
function moveBlockDown() {
  clearBlock();
  const atBottom = currentBlock.some(index => index + cols >= gridCells.length || gridCells[index + cols].classList.contains('taken'));
  if (!atBottom) {
    currentBlock = currentBlock.map(index => index + cols);
  } else {
    currentBlock.forEach(index => gridCells[index].classList.add('taken'));
    currentBlock = [4, 5, 6]; // Spawn balok baru
    checkRows();
  }
  drawBlock();
}

// Periksa baris penuh
function checkRows() {
  for (let row = 0; row < rows; row++) {
    const isFull = [...Array(cols).keys()].every(col => gridCells[row * cols + col].classList.contains('taken'));
    if (isFull) {
      // Hancurkan baris penuh
      score += 10;
      scoreDisplay.textContent = `Score: ${score}`;
      const fullRow = gridCells.splice(row * cols, cols);
      fullRow.forEach(cell => cell.classList.remove('taken'));
      gridCells.unshift(...fullRow);
      gridCells.forEach(cell => grid.appendChild(cell));
    }
  }
}

// Event untuk gerakan berulang
function startGame() {
  setInterval(moveBlockDown, 1000); // Balok jatuh setiap detik
}
startGame();
