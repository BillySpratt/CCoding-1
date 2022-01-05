let particles = [];

function setup() {
    createCanvas(500, 500);
    background(255);
    rectMode(CENTER);
    for (let i = 0; i < 20; i++) {
        particles.push(new Particle(250, 50))
    }

}

function draw() {
    let gravity = createVector(0, 0.2);
    background(0);

    particles.forEach(particle => {
        particle.applyForce(gravity);
        particle.update();
        particle.edges();
        particle.render();
    });

}