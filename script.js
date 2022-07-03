const container = document.getElementById('container');
const gridSize = document.getElementById('gridSize');
const goButton = document.getElementById('goButton');

gridSize.addEventListener('mousedown', () => {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
});

goButton.addEventListener('click', () => {
  let pickSize = gridSize.value;
  let boxSize = (700 / pickSize) - 2;
  console.log(pickSize);

  for (i = 0; i < (pickSize * pickSize); i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = boxSize + 'px';
    box.addEventListener('mouseout', () => box.classList.add('color'));
    container.appendChild(box);
  }
  gridSize.value = '';
});