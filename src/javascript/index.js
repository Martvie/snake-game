let canvas = document.getElementById('snake')
let context = canvas.getContext('2d')
let box = 32

let direction = 'right'

let snake = []
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function createBg() {
    context.fillStyle = 'lightgreen'
    context.fillRect(0,0, 16 * box, 16 * box)
}

function snakeInit() {
    for(let i = 0; i < snake.length; i++){
        context.fillStyle = 'orange'
        context.fillRect(snake[i].x, snake[i].y, box, box)
    } 
}

function gameInit(){
    createBg()
    snakeInit()

    let snakeX = snake[0].x
    let snakeY = snake[0].y


    if(direction == 'right'){snakeX += box}
    if(direction == 'left'){snakeX -= box}
    if(direction == 'up'){snakeY -= box}
    if(direction == 'down'){snakeY += box}

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.pop()
    snake.unshift(newHead)
}

let game = setInterval(gameInit, 100)