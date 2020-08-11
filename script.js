function generateGrid(rows, cols) {
  const height = Math.floor(720/rows);
  const width = height;
  container.style.gridTemplateColumns = `repeat(${cols}, ${width}px)`;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let div = document.createElement('div');
      div.style.height = `${height}px`;
      div.style.width = `${width}px`;
      div.classList.add(`item`);
      container.appendChild(div);
    }
  }
}

function draw(e) {
  e.target.classList.add('hovered');
}

function drawRGB() {
  clear();
  let gridItems = document.querySelectorAll('.item');
  gridItems.forEach(item => item.removeEventListener('mouseover', draw));
  gridItems.forEach(item => item.addEventListener('mouseover', e => {
    let color = getRandomColor();
    e.target.style.backgroundColor = color;
    e.target.style.filter = '90%';
  }));
}

function getRandomColor(){
  let letters = '0123456789ABCDEF';
  let color = '';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return '#' + color;
}

function clear(item) {
  let gridItems = document.querySelectorAll('.item');
  gridItems.forEach(item => {
    item.classList.remove('hovered');
  });
  resize();
}

function resize() {
  let rows = prompt("How many squares per side for your new grid?");
  let cols = rows;
  let gridItems = document.querySelectorAll('.item');
  gridItems.forEach(item => container.removeChild(item));
  generateGrid(rows, cols);
  addListeners();
}

function addListeners() {
  const clearBtn = document.querySelector('#clear-btn');
  clearBtn.addEventListener('click', clear);
  const rgbBtn = document.querySelector('#rgb-btn');
  rgbBtn.addEventListener('click', drawRGB);
  let gridItems = document.querySelectorAll('.item');
  gridItems.forEach(item => item.addEventListener('mouseover', draw));
}

let rows = 16;
let cols = 16;
const container = document.querySelector('.container');
generateGrid(rows, cols);
addListeners();

/*
 * clear button listener
 * grid mouse hover listener
 * resize grid
 */
