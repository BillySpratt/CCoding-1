let particle;

function setup() {
    createCanvas(500, 500);
    background(255);
    rectMode(CENTER);
    particle = new Particle(250, 250)
}

function draw() {
    let gravity = createVector(0, 0.2);
    particle.applyForce(gravity);

    background(0);

    particle.update();
    particle.edges();
    particle.render();
}