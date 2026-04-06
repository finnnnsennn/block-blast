document.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') {
    moveBlockLeft();
  } else if (event.key === 'ArrowRight') {
    moveBlockRight();
  } else if (event.key === 'ArrowDown') {
    moveBlockDown();
  }
});

// Gerakkan ke kiri
function moveBlockLeft() {
  clearBlock();
  const atEdge = currentBlock.some(index => index % cols === 0);
  if (!atEdge) currentBlock = currentBlock.map(index => index - 1);
  drawBlock();
}

// Gerakkan ke kanan
function moveBlockRight() {
  clearBlock();
  const atEdge = currentBlock.some(index => index % cols === cols - 1);
  if (!atEdge) currentBlock = currentBlock.map(index => index + 1);
  drawBlock();
}
