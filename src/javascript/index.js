let canvas = document.getElementById('snake')
let context = canvas.getContext('2d')
let box = 32

let game = setInterval(gameInit, 100)

let direction = ''

let snake = []
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function createBg() {
    context.fillStyle = 'lightgreen'
    context.fillRect(0, 0, 16 * box, 16 * box)
}

function snakeInit() {
    for (let i = 0; i < snake.length; i++) {
        context.fillStyle = 'orange'
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

document.addEventListener("keydown", update)

function update(event) {
    if (event.key == 'ArrowDown'  && direction !='up'|| event.key == 's' && direction !='up' ) direction = 'down'

    if (event.key == 'ArrowUp' && direction !='down' || event.key == 'w' && direction !='down') direction = 'up'

    if (event.key == 'ArrowRight' && direction !='left' || event.key == 'd' && direction !='left') direction = 'right'

    if (event.key == 'ArrowLeft' && direction !='right' || event.key == 'a' && direction !='right') direction = 'left'

} 

function gameInit() {
    createBg()
    snakeInit()

    if (snake[0].x > 15 * box && direction == 'right') snake[0].x = 0
    if (snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box
    if (snake[0].y > 15 * box && direction == 'down') snake[0].y = 0
    if (snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box

    let snakeX = snake[0].x
    let snakeY = snake[0].y


    if (direction == 'right') { snakeX += box }
    if (direction == 'left') { snakeX -= box }
    if (direction == 'up') { snakeY -= box }
    if (direction == 'down') { snakeY += box }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.pop()
    snake.unshift(newHead)
}
