let sizeInput

const button = document.querySelector('#size');

button.addEventListener('click', ()=> {
    sizeInput = parseInt(prompt('Insert grid size: '));
    if (isNaN(sizeInput)) {
        alert("Not a number");
    }else if( sizeInput >= 1 && sizeInput <= 100){
        handleSizeInput(sizeInput);
    }else{
        alert("Not in range")
    }    
})


function handleSizeInput(sizeInput){
    normalSize = 16;
    
    if (sizeInput === undefined){
        gridSize = normalSize;
    }else{
        gridSize = sizeInput;
    }   

    blockSize = (960/gridSize)-2;
    numberOfIteration = Math.pow(gridSize, 2);

    const container = document.querySelector('#container');

    const removeBlocks = document.querySelectorAll('.blocks');

    removeBlocks.forEach((item) => item.remove());


    for (let i = 0; i < numberOfIteration; i++){
        const blocks = document.createElement('div');
        blocks.classList.toggle('blocks');
        blocks.setAttribute('style', `border: 1px solid black; width: ${blockSize}px; height: ${blockSize}px`);
        
        blocks.addEventListener('mouseover', () => {
            blocks.style.backgroundColor = 'black';
        });
        
        container.appendChild(blocks);
    }
}

handleSizeInput();