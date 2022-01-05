class Alien {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.velocity = alienVelocity;
    }

    //draws alien
    render() {
        push()
        translate(this.pos.x, this.pos.y);
        image(alienImg, 0, 0, alienWidth, alienHeight)
        pop()
    }

    //moves alien sideways
    move() {
            this.pos.x += this.velocity;
        }
        //moves alien downwards
    shift() {
        this.pos.y += shiftDown;
        this.velocity *= -1;
    }
}