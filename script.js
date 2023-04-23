const board = document.querySelector('#board'),
      squaresNumber = 500,
      colors = ['#e05e5e', '#6bb2fa', 'c1fa6b', '#c1fa6b', '#fa8f6b', '#fa6b96', '#face55'];

for (let i = 0; i < squaresNumber; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () =>
    setColor(square));

    square.addEventListener('mouseleave', () =>
    removeColor(square))

    board.append(square);
}

function setColor(item) {
    const color = getRandomColor();
    item.style.backgroundColor = `${color}`;
    item.style.boxShadow = `0 0 5px ${color}, 0 0 10px ${color}`
}

function removeColor(item) {
    item.style.backgroundColor = '#1d1d1d';
    item.style.boxShadow = '0 0 2px #000';

}
function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}