class Ball {
    constructor(x, y, vx, vy, radius) {
            //properties
            this.x = x;
            this.y = y;
            this.vx = random(-8, 8);
            this.vy = random(-8, 8);
            this.radius = random(10, 40);
            this.colourR = random(1, 255);
            this.colourG = random(1, 255);
            this.colourB = random(1, 255);
            //this.rotation = 0;

        }
        //function to draw the ball
    drawBall() {

            //translate(this.x, this.y);
            //rotate(this.rotation);
            noStroke();
            fill(this.colourR, this.colourG, this.colourB);
            ellipse(this.x, this.y, this.radius * 2, this.radius * 2);

        }
        //function to move the ball

    moveBall() {
        if (this.x < this.radius || this.x > width - this.radius) {
            this.vx = this.vx * -1;
            this.x = this.x + this.vx;
        } else {
            this.x = this.x + this.vx;
        }
        if (this.y < this.radius || this.y > height - this.radius) {
            this.vy = this.vy * -1;
            this.y = this.y + this.vy;
        } else {
            this.y = this.y + this.vy;
        }
    }

}