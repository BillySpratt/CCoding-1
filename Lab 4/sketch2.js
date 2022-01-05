let Ball;
let ax = 0;
let ay = 0;

function setup() {
    createCanvas(1000, 700);
    Ball = new RCB(width / 2, height / 2);
}

function draw() {
    rectMode(CENTER);
    background(80, 155, 255);
    Ball.ball();
    Ball.accelerateBall(ax, ay);
}

function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        ax = -0.05;
        ay = 0;
    }
    if (keyCode === LEFT_ARROW) {
        ax = 0.05;
        ay = 0;
    }
    if (keyCode === UP_ARROW) {
        ax = 0;
        ay = -0.05;
    }
    if (keyCode === DOWN_ARROW) {
        ax = 0;
        ay = 0.05;
    }
}

function keyReleased() {
    ax = 0;
    ay = 0;
}