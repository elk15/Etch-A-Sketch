const drawbox = document.querySelector('#drawbox');
const clearBtn = document.querySelector('#clearBtn');
const colorPicker = document.querySelector('#colorPicker');
const eraser = document.querySelector('#eraser');
const rainbow = document.querySelector('#rainbow');
let drawboxSize = 16;
let color = 'black';

function changeSize(size) {

    for (let i = 1; i <= size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        drawbox.appendChild(div);
        drawbox.style.setProperty('grid-template-columns', 'repeat(' + size + ', 1fr)');

    }


}


function changeColor(color) {
    document.querySelectorAll('.square').forEach((square) => {
        square.addEventListener('click', () => {
            square.style.backgroundColor = color

        });
    });
}


changeSize(drawboxSize);

changeColor(color);


clearBtn.addEventListener('click', () => {
    document.querySelectorAll('.square').forEach((square) => {
        drawbox.removeChild(square);
    })
    do {
        drawboxSize = prompt('Select new size for canvas (3-64):')
    } while (drawboxSize < 3 || drawboxSize > 64);
    changeSize(drawboxSize);
    changeColor('black');
})

colorPicker.addEventListener('input', (e) => {
    console.log(e);
    color = e.target.value;
    changeColor(color);
})

eraser.addEventListener('click', () => {
    changeColor('white');
})








