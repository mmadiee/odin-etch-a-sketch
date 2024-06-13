document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container');
  
    // Create a 16x16 grid
    const gridSize = 16;
    for (let i = 0; i < gridSize * gridSize; i++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      
      // Add hover effect
      gridItem.addEventListener('mouseover', () => {
        gridItem.style.backgroundColor = 'black'; // Change this to any color you prefer
      });
  
      container.appendChild(gridItem);
    }
  });
  
