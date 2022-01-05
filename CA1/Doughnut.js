class Snack {
    constructor(x, y, d, dR) {
            //Doughnut constructors
            this.doughnutX = x;
            this.doughnutY = y;
            this.vx = random(-8, 8);
            this.vy = random(-8, 8);
            this.diameter = d;
            this.radius = d / 2;
            this.rotation = 0;
            this.DoughnutRemaining = dR;

            //Head constructors
            this.mouthAngleTop = (2 * Math.PI) - QUARTER_PI;
            this.mouthAngleBottom = QUARTER_PI;
            this.chew = 0.03;
            this.headsize = 100;
        }
        //draws the doughnut and later covers the doughnut as it is eaten
    drawSnack(d, icing, bg, dR, bun) {
            if (this.DoughnutRemaining >= 0) {
                push();
                translate(this.doughnutX, this.doughnutY);
                rotate(this.rotation);
                noStroke();
                //bun outer
                fill(color(bun));
                ellipse(0, 0, d);
                //icing
                fill(color(icing));
                ellipse(0, 0, d * .9);
                //bun inner
                fill(color(bun));
                ellipse(0, 0, d * .4);
                //hole
                fill(color(bg));
                ellipse(0, 0, d * .3);
                //doughnut 1/3 gone
                if (this.DoughnutRemaining < (dR * 2 / 3)) {
                    fill(color(bg));
                    ellipse(0 - (1 / 3 * d), 0 + (1 / 4 * d), d * .35);
                    ellipse(0 - (.13 * d), 0 + (.2 * d), d * .4);
                    ellipse(0 - (.13 * d), 0 + (.35 * d), d * .5);
                    ellipse(0 + (.05 * d), 0 + (.2 * d), d * .4);
                    ellipse(0 + (.18 * d), 0 + (.4 * d), d * .4);
                }
                //doughnut 2/3 gone
                if (this.DoughnutRemaining < (dR * 1 / 3)) {
                    fill(color(bg));
                    ellipse(0 + (1 / 3 * d), 0 - (1 / 4 * d), d * .25);
                    ellipse(0 + (.18 * d), 0 - (.18 * d), d * .25);
                    ellipse(0 + (.35 * d), 0 + (.05 * d), d * .6);
                }
                pop();
            }
        }
        //makes the doughnut bouncy 
    moveSnack(d) {
            if (this.DoughnutRemaining >= 0) {
                if (this.doughnutX < d / 2 || this.doughnutX > width - d / 2) {
                    this.vx = this.vx * -1;
                    this.doughnutX = this.doughnutX + this.vx;
                } else {
                    this.doughnutX = this.doughnutX + this.vx;
                }
                if (this.doughnutY < d / 2 || this.doughnutY > height - d / 2) {
                    this.vy = this.vy * -1;
                    this.doughnutY = this.doughnutY + this.vy;
                } else {
                    this.doughnutY = this.doughnutY + this.vy;
                }
                this.rotation += .01;
            }
        }
        //this animates the head and makes it look towards the doughnut
    hungryHead() {
            push();
            stroke(0);
            strokeWeight(2);
            fill(255, 255, 0)
            noStroke();

            this.dx = this.doughnutX - mouseX;
            this.dy = this.doughnutY - mouseY;
            translate(mouseX, mouseY);
            //this is the rotate
            if (this.DoughnutRemaining >= 0) {
                rotate(Math.atan2(this.dy, this.dx));
            }
            //this is the chewingmotion
            arc(0, 0, this.headsize, this.headsize, this.mouthAngleBottom, this.mouthAngleTop, PIE);
            this.mouthAngleTop += this.chew;
            this.mouthAngleBottom -= this.chew;
            if (this.mouthAngleTop > Math.PI * 1.99 || this.mouthAngleTop < (2 * Math.PI) - QUARTER_PI) {
                this.chew *= -1;
            };
            pop();
        }
        //this tells sketch that the mouse is over the doughnut and returns true
    eat(d) {
            if (mouseX > (this.doughnutX - d / 2) && mouseX < (this.doughnutX + d / 2) &&
                mouseY > (this.doughnutY - d / 2) && mouseY < (this.doughnutY + d / 2)) {
                this.DoughnutRemaining -= .2;
                //this.vx *= 1.002;
                //this.vy *= 1.002;
                return true;
            } else {
                return false;
            }
        }
        //this tells sketch that the doughnut has been eaten
    eaten() {
        if (this.DoughnutRemaining <= 0) {
            return true;
        } else {
            return false;
        }
    }
}