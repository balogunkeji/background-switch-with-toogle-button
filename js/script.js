//Choose a random color
const span = document.querySelector('span')
const body = document.querySelector('body')
const colors = ['black', 'white', 'grey']

body.style.backgroundColor = 'black'
span.addEventListener('click', changeBackground)

function changeBackground() {
    const colorIndex = parseInt(Math.random() * colors.length)
    body.style.backgroundColor = colors[colorIndex]
}