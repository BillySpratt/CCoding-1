class Shooter {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.direction = 0;
    }

    //draws shooter
    render() {
        push()
        translate(this.pos.x, this.pos.y);
        fill(255, 0, 0)
        rectMode(CENTER);
        rect(0, 0, shooterWidth, shooterHeight);
        pop()
    }

    //moves shooter sideways
    move() {
        if (this.pos.x < 50 || this.pos.x > 450) {
            this.direction *= -1;
        }
        this.pos.x += this.direction;
    }
    setDirection(direction) {
        this.direction = direction;
    }
}