document.addEventListener("DOMContentLoaded", () => {
  createGrid(16); // Create initial 16x16 grid
});

function createGrid(gridSize) {
  const container = document.querySelector(".container");
  container.innerHTML = ""; // Clear existing grid

  const squareSize = 500 / gridSize; // Calculate size of each square based on grid size

  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.style.width = `${squareSize}px`;
    gridItem.style.height = `${squareSize}px`;

    // Add hover effect
    gridItem.addEventListener("mouseover", () => {
      gridItem.style.backgroundColor = getRandomColor();
    });
    container.appendChild(gridItem);
  }
}

function changeGrid() {
  let newSize = parseInt(prompt("Enter new grid size (1-100):"), 10);

  if (isNaN(newSize) || newSize < 1 || newSize > 100) {
    alert("Invalid input. Please enter a number between 1 and 100.");
    return;
  }

  createGrid(newSize);
}

// Randomize RGB Values
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
