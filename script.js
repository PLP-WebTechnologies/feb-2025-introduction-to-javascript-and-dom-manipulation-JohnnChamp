// Change text content dynamically AND modify CSS styles via JavaScript
const changeTextBtn = document.getElementById('change-text-btn');
const textContent = document.getElementById('text-content');

changeTextBtn.addEventListener('click', () => {
  textContent.textContent = "The text has been changed dynamically!";
  // Modify CSS style dynamically
  textContent.style.color = "teal";
  textContent.style.fontWeight = "bold";
  textContent.style.fontSize = "1.2rem";
  textContent.style.backgroundColor = "#e0f7fa";
  textContent.style.padding = "10px";
  textContent.style.borderRadius = "5px";
});

// Add or remove an element when a button is clicked
const toggleBoxBtn = document.getElementById('toggle-box-btn');
const boxContainer = document.getElementById('box-container');

toggleBoxBtn.addEventListener('click', () => {
  const existingBox = document.getElementById('dynamic-box');
  if (existingBox) {
    boxContainer.removeChild(existingBox);
  } else {
    const box = document.createElement('div');
    box.id = 'dynamic-box';
    box.textContent = 'I am a dynamically added box!';
    box.style.width = '200px';
    box.style.height = '100px';
    box.style.backgroundColor = '#4CAF50';
    box.style.color = 'white';
    box.style.display = 'flex';
    box.style.justifyContent = 'center';
    box.style.alignItems = 'center';
    box.style.marginTop = '10px';
    box.style.borderRadius = '8px';
    boxContainer.appendChild(box);
  }
});
