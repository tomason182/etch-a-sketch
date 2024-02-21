const container = document.querySelector('#container')
container.setAttribute('style', 'border: solid; width: 100px; heigth: 100px')

//create div

const square = document.createElement('div')
square.classList.toggle('grid-square')
square.setAttribute('style', 'border: solid; width: 25px; heigth: 25px')
square.style.width