const container = document.querySelector('#container');
container.setAttribute('style', 'display: flex; flex-flow: row wrap; max-width: 640px');


//create div

for (let i=0; i< 255; i++){
    const square = document.createElement('div');
    square.classList.toggle('grid-square');
    square.setAttribute('style', 'border: 1px solid grey; width: 40px; height: 40px;');

    container.appendChild(square);    
}

const hover = document.querySelectorAll('.grid-square');
hover.forEach((sqr) => {
    sqr.addEventListener('mousemove', () => {
        sqr.setAttribute('style', 'border: 1px solid grey; width: 40px; height: 40px; background-color: red')
    });
});

const gridSize = document.querySelector('#size');
gridSize.addEventListener('click', getPrompt)

function getPrompt() {
    return alert(prompt("Enter a grid size - Max: 100"))
}