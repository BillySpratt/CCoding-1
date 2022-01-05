class BallRgb {
    constructor() {
        this.x = 20
        this.y = 20
        this.vx = .5;
        this.vy = .5;
        this.acc = .03;
        this.R = random(150, 255);
        this.G = random(150, 255);
        this.B = random(150, 255);
        this.size = random(10, 30)
    }

    ball() {
        fill(this.R, this.G, this.B);
        ellipse(this.x, this.y, this.size);
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
    }

    accelerateBall() {
        this.vx += this.acc;
        this.vy += this.acc;
    }

}