let arrow;
let speed = 4;
let angle = 60;


function setup() {
    createCanvas(1000, 800);

    arrow = new Arrow(100, 100, 0, 0, 0, 0);

    arrow.vx = speed * cos(angle * PI / 180);
    arrow.vy = speed * sin(angle * PI / 180);

}

function draw() {
    background(255);
    arrow.draw();
    arrow.move();
}