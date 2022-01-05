let balls = []

function setup() {
    createCanvas(1500, 800);
    for (let b = 0; b < 20; b++) {
        balls.push(new Ball(width / 2, height / 2, 5, 0, 10));
    }
}

function draw() {
    background(155);
    balls.forEach(ball => ball.drawBall());
    balls.forEach(ball => ball.moveBall());
}