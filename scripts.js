const drawbox = document.querySelector('#drawbox');

// for (let i = 1; i <= 256; i++) {
//     const div = document.createElement('div');
//     div.classList.add('square');
//     drawbox.appendChild(div);
// }

function changeSize(size) {
    for (let i = 1; i <= size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        drawbox.appendChild(div);
        div.style.setProperty('grid-template-columns', 'repeat(' + size + ', 1fr)');
        div.style.setProperty('grid-template-rows', 'repeat(' + size + ', 1fr)');
    }
}

const squares = document.querySelectorAll('.square');



function changeColor(color) {
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = color;
        });
    });
}

changeColor('black');

changeSize(23);