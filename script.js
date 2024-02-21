const container = document.querySelector('#container');
container.setAttribute('style', 'border: solid; width: 640px; height: 640px; display: flex');


//create div

const square = document.createElement('div');
square.classList.toggle('grid-square');
square.setAttribute('style', 'border: solid; width: 40px; height: 40px');

container.appendChild(square);