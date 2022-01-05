class Particle {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.velocity = createVector(0, 1);
        this.acc = createVector(0, 0);
        this.r = 16;
    }


    applyForce(force) {
        this.acc.add(force);
    }

    update() {
        this.velocity.add(this.acc);
        this.pos.add(this.velocity);

    }

    render() {
        stroke(255)
        strokeWeight(2)
        fill(255, 100)
        ellipse(this.pos.x, this.pos.y, this.r * 2)
    }

    edges() {
        if (this.pos.y >= height - this.r) {
            this.pos.y = height - this.r;
            this.velocity.y *= -1
        } else if (this.pos.y <= 0 + this.r) {
            this.pos.y = 0 + this.r;
            this.velocity.y *= -1
        }
    }
}