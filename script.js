let sizeInput = 16

const button = document.querySelector('#size');

button.addEventListener('click', ()=> {
    sizeInput = prompt('Insert grid size: ');

    handleSizeInput(sizeInput);
})

const container = document.querySelector('#container');

for (let i = 0; i < 256; i++){
    const blocks = document.createElement('div');
    blocks.classList.toggle('blocks')
    blocks.setAttribute('style', 'border: 1px solid black; width: 38px; height: 38px')
    
    blocks.addEventListener('mouseover', () => {
        blocks.style.backgroundColor = 'black';
    });
    
    container.appendChild(blocks);
}

function handleSizeInput(sizeInput){
    console.log('El valor ingresado es: ', sizeInput)
}        


