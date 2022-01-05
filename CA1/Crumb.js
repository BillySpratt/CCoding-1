class Crumb {
    constructor() {
            this.pos = createVector(mouseX, mouseY);
            this.velocity = p5.Vector.random2D();
            this.velocity.mult(random(0.5, 6));
            this.acc = createVector(0, 0);
            this.size = 10;
            this.lifetime = 255;
            this.flip = random(-10, 10);
        }
        //Returns True when lifetime is less then 0
    isFinished() {
            return (this.lifetime < 0);
        }
        //This will be used for gravity later
    applyForce(force) {
            this.acc.add(force);
        }
        //This updates all the data for the crumbs
    update() {
            this.velocity.add(this.acc);
            this.pos.add(this.velocity);
            this.acc.set(0, 0);
            this.lifetime -= 4;
        }
        //this draws the crumbs using above data and a coinflip like method to colour the crumbs
    render(crumb, icing, size) {
        noStroke()
        if (this.flip <= 0) {
            fill(color(crumb), this.lifetime);
        } else if (this.flip > 0) {
            fill(color(icing), this.lifetime);
        }
        ellipse(this.pos.x, this.pos.y, size);
    }
}