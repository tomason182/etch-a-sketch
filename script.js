const container = document.querySelector('#container')
container.setAttribute('style', 'border: solid; width: 640px; height: 640px')


//create div

const square = document.createElement('div')
square.classList.toggle('grid-square')
square.setAttribute('style', 'border: solid; width: 25px; height: 25px')
square.style.width