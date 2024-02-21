const norm = 16;
let entry = 1;
let size = norm * entry;
let gridSize = Math.pow(size, 2)
let pixel = 640/size

console.log(size)
console.log(pixel)
console.log(gridSize)


const container = document.querySelector('#container');
container.setAttribute('style', 'display: flex; flex-flow: row wrap; max-width: 640px');


//create div

for (let i=0; i< (gridSize - 1); i++){
    const square = document.createElement('div');
    square.classList.toggle('grid-square');
    square.setAttribute('style', `border: 1px solid grey; width: ${pixel}px; height: ${pixel}px;`);

    container.appendChild(square);    
}

const hover = document.querySelectorAll('.grid-square');
hover.forEach((sqr) => {
    sqr.addEventListener('mousemove', () => {
        sqr.setAttribute('style', `border: 1px solid grey; width: ${pixel}px; height: ${pixel}px; background-color: red`);
    });
});

const gridSizeM = document.querySelector('#size');
gridSizeM.addEventListener('click', getPrompt)

function getPrompt() {
    while (true) {
        size = parseInt(prompt("Enter a grid size - min: 1 to max: 100"))
        if (size > 100 ) {
            alert("Incorrect Number");
        }
        else if (isNaN(size)) {
            alert("Entry is not Integer");
        }else{
            break
        } 
        }
    return size;           
}