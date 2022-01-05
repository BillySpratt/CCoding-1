let particles = [];

function setup() {
    createCanvas(500, 500);
    background(255);
    rectMode(CENTER);
}

function draw() {
    for (let i = 0; i < 2; i++) {
        particles.push(new Particle(250, 50))
    }
    for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].isFinished()) {
            particles.splice(i, 1);
        }
    }

    let gravity = createVector(0, 0.2);
    background(0);

    particles.forEach(particle => {
        particle.applyForce(gravity);
        particle.update();
        //particle.edges();
        particle.render();
    });

}