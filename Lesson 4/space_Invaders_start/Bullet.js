class Bullet {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.velocity = bulletVelocity;
    }

    //draws bullet
    render() {
        push()
        translate(this.pos.x, this.pos.y);
        fill(0, 200, 0);
        ellipse(0, 0, bulletWidth);
        pop()
    }

    //moves the bullet 
    move() {
        this.pos.y -= this.velocity;
    }

    //checks if bullet is colliding with alien
    hits(alien) {
        let distance = p5.Vector.sub(this.pos, alien.pos).mag();
        if (distance < 30) {
            return true;
        } else {
            return false;
        }
    }
}