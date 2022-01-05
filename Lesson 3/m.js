class Molecule {
    constructor() {
        this.pos = createVector(
            Math.round(Math.random() * 1500),
            Math.round(Math.random() * 800)
        )
        this.speed = createVector(
            Math.random() * 4 - 2,
            Math.random() * 4 - 2
        )
        this.radius = Math.round(Math.random() * 20 + 5);
        this.r = random(10, 255);
        this.g = random(10, 255);
        this.b = random(10, 255);
    }
    render() {
        let myAngle = this.speed.heading();
        push();
        translate(this.pos.x, this.pos.y);
        rotate(myAngle);
        stroke(this.r, this.g, this.b)
        rect(0, 0, this.radius, this.radius);
        pop();
    }
    step() {
        this.pos.x = this.pos.x + this.speed.x;
        this.pos.y = this.pos.y + this.speed.y;
    }
}