let Ball;

function setup() {
    createCanvas(700, 700);
    Ball = new BallRgb(20, 20, 0, 0, 20, 150, 25, 50);
}

function draw() {
    rectMode(CENTER);
    background(150);
    Ball.ball();
    Ball.accelerateBall();
}